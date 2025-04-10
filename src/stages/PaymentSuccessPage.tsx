import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Plane, MapPin, Calendar, Mail } from 'lucide-react';
import Lottie from 'lottie-react';
import successAnimation from '../assets/success-animation.json';
import { useScrollToTop } from '../hooks/useScrollToTop';

export function PaymentSuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const transactionDetails = location.state;
  const [showConfetti, setShowConfetti] = React.useState(false);

  useScrollToTop(null);
  
  useEffect(() => {
    // Prevent direct access to success page
    if (!transactionDetails?.verified) {
      navigate('/book', { replace: true });
      return;
    }
    
    // Clear booking state on successful payment
    sessionStorage.removeItem('bookingState');

    // Trigger confetti animation after a short delay
    setTimeout(() => setShowConfetti(true), 500);

    // Log successful transaction
    console.log('Successful transaction:', {
      transactionId: transactionDetails.transactionId,
      amount: transactionDetails.amount,
      customerEmail: transactionDetails.customerEmail
    });
  }, [transactionDetails, navigate]);

  if (!transactionDetails?.verified) return null;

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
        {/* Success Animation */}
        <div className="relative">
          <div className="w-40 h-40 mx-auto">
            <Lottie
              animationData={successAnimation}
              loop={false}
              className="w-full h-full"
            />
          </div>
          
          {showConfetti && (
            <div className="absolute inset-0 pointer-events-none animate-float">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: ['#FFD700', '#FF6B6B', '#4CAF50', '#2196F3'][i % 4],
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float ${2 + Math.random() * 2}s linear infinite`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Success Message */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mt-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent" />
          
          <div className="relative">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Your Adventure Awaits! 🎉
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Get ready for an amazing journey! We've sent your booking confirmation to{' '}
              <span className="font-semibold text-blue-600">{transactionDetails.customerEmail}</span>
            </p>

            {/* Animated Icons */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-blue-50 group hover:bg-blue-100 transition-colors">
                <Mail className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-gray-600">Check Email</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-blue-50 group hover:bg-blue-100 transition-colors">
                <Calendar className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-gray-600">Pack Bags</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-blue-50 group hover:bg-blue-100 transition-colors">
                <Plane className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-gray-600">Start Journey</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Link
                to="/book"
                className="group inline-flex items-center justify-center gap-2 w-full bg-blue-500 text-white px-6 py-4 rounded-2xl font-semibold hover:bg-blue-600 transition-all hover:scale-[1.02] hover:shadow-lg"
              >
                <span>Plan Another Adventure</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href="https://wa.me/234XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 text-gray-600 hover:text-blue-600 transition-colors group"
              >
                <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Need help? Chat with us on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
