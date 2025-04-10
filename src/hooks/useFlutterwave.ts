import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import type { FlutterwaveConfig } from 'flutterwave-react-v3';
import { sendWebhook } from '../services/webhook';
import { generateBookingId } from '../utils/bookingId';

interface PaymentConfig {
  amount: number;
  customerEmail: string;
  customerName: string;
  customerPhone: string;
  meta: Record<string, any>;
}

export function useFlutterwave() {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [txRef, setTxRef] = React.useState<string>('');
  const [bookingId] = React.useState(() => generateBookingId());

  // Clean up Flutterwave iframe on unmount
  React.useEffect(() => {
    return () => {
      const iframe = document.querySelector('iframe[name="checkout"]');
      if (iframe) {
        iframe.remove();
      }
    };
  }, []);

  const config = useCallback((paymentConfig: PaymentConfig): FlutterwaveConfig => {
    const { amount, customerEmail, customerName, customerPhone, meta } = paymentConfig;

    const newTxRef = Date.now().toString();
    setTxRef(newTxRef);

    return {
      public_key: import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY as string,
      tx_ref: newTxRef,
      amount,
      currency: 'NGN',
      payment_options: 'card,ussd,banktransfer',
      customer: {
        email: customerEmail,
        name: customerName,
        phonenumber: customerPhone,
      },
      customizations: {
        title: 'Flightpadi Holiday',
        description: 'Your Dream Vacation Package',
        logo: 'https://images.unsplash.com/photo-1589308454676-22a0e7e1f58f',
      },
      meta,
      callback: async (response) => {
        console.log('Payment callback:', response);
        setIsProcessing(true);

        try {
          if (response.status === 'successful') {
            // Send webhook for successful payment
            await sendWebhook({
              bookingId,
              transaction: {
                amount: response.amount,
                currency: response.currency,
                status: response.status,
                reference: response.tx_ref,
                timestamp: new Date().toISOString(),
              },
              customer: meta.customer,
              trip: meta.trip,
              stage: 'payment_completed',
            });

            navigate('/payment/success', { 
              replace: true, 
              state: { 
                verified: true,
                transactionId: txRef,
                amount: response.amount,
                customerEmail: response.customer.email
              }
            });
          } else {
            console.error('Payment failed:', response);
            
            // Send webhook for failed payment
            await sendWebhook({
              bookingId,
              transaction: {
                amount: response.amount,
                currency: response.currency,
                status: 'failed',
                reference: response.tx_ref,
                timestamp: new Date().toISOString(),
              },
              customer: meta.customer,
              trip: meta.trip,
              stage: 'payment_failed',
            });

            navigate('/payment/failed', { 
              replace: true,
              state: { error: 'Payment was not successful' }
            });
          }
        } catch (error) {
          console.error('Payment processing error:', error);
          navigate('/payment/failed', { 
            replace: true,
            state: { error: 'An error occurred while processing payment' }
          });
        } finally {
          setIsProcessing(false);
          // @ts-ignore - FlutterWave types are not up to date
          window.FlutterwaveCheckout?.close();
        }
      },
      onclose: () => {
        console.log('Payment modal closed');
        
        if (!isProcessing) {
          navigate('/payment/cancelled', { replace: true });
        }
      }
    };
  }, [navigate, isProcessing]);

  return { config, isProcessing, txRef };
}
