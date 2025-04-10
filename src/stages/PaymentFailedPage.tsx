import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { XCircle, RefreshCw, ArrowLeft } from 'lucide-react';
import { useScrollToTop } from '../hooks/useScrollToTop';

export function PaymentFailedPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const error = location.state?.error || 'We couldn\'t process your payment';

  useScrollToTop(null);

  useEffect(() => {
    // Log the error for debugging
    if (location.state?.error) {
      console.error('Payment failed:', location.state.error);
    }
  }, [location.state]);

  return (
    <>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-6 text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <XCircle className="w-8 h-8 text-red-500" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Payment Failed
        </h1>
        
        <p className="text-gray-600 mb-8">
          {error}. Don't worry, your vacation package is still saved.
        </p>

        <div className="space-y-4">
          <button
            onClick={() => navigate('/book', { state: { retry: true } })}
            className="inline-flex items-center justify-center gap-2 w-full bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
          >
            <RefreshCw className="w-5 h-5" />
            Try Again
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
