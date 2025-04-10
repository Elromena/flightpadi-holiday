import React from 'react';
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import { DateRange } from 'react-day-picker';
import { destinations } from '../data/destinations';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { DateRangePicker } from '../components/DateRangePicker';

interface DatePickerProps {
  selectedDestination: string | null;
  dateRange: DateRange | undefined;
  onDateSelect: (range: DateRange | undefined) => void;
  onBack: () => void;
  onNext: () => void;
}

export function DatePicker({ selectedDestination, dateRange, onDateSelect, onBack, onNext }: DatePickerProps) {
  const destination = destinations.find(d => d.id === selectedDestination);

  useScrollToTop(null);

  if (!destination) return null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 sm:px-6">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3 text-center">
          Choose Your Travel Dates
        </h1>
        <p className="text-lg text-gray-500 text-center mb-4">
          When would you like to visit {destination.name}?
        </p>
        <div className="text-sm text-gray-400 flex flex-col items-center gap-2 px-4">
          <p>• Trips must be booked at least one week in advance</p>
          <p>• Minimum stay is 2 days</p>
        </div>
      </div>

      <DateRangePicker value={dateRange} onDateSelect={onDateSelect} />

      <div className="sticky bottom-4 sm:bottom-8 mt-8 sm:mt-12 flex justify-center gap-3 sm:gap-4">
        <button
          className="bg-white text-gray-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
          onClick={onBack}
        >
          <ArrowLeft className="w-5 h-5" />
          Change Destination
        </button>
        {dateRange?.from && dateRange?.to && (
          <button
            className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
            onClick={onNext}
          >
            Choose Attractions
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
