import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AlertCircle, ArrowLeft } from 'lucide-react';
import { useScrollToTop } from '../hooks/useScrollToTop';

export function PaymentCancelledPage() {
  const navigate = useNavigate();

  useScrollToTop(null);

  return (
    <>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-6 text-center">
        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-8 h-8 text-amber-500" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Payment Cancelled
        </h1>
        
        <p className="text-gray-600 mb-8">
          You've cancelled the payment process. Your vacation package is saved and you can complete the booking anytime.
        </p>

        <div className="space-y-4">
          <button
            onClick={() => navigate('/book', { state: { retry: true } })}
            className="inline-flex items-center justify-center gap-2 w-full bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
          >
            Complete Booking
          </button>
          
          <Link
            to="/book"
            onClick={() => sessionStorage.removeItem('bookingState')}
            className="inline-flex items-center justify-center gap-2 w-full text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Start Over
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
