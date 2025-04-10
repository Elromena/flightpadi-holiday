import React, { useEffect } from 'react';
import { DayPicker, DateRange } from 'react-day-picker';
import { addDays, differenceInDays } from 'date-fns';
import 'react-day-picker/dist/style.css';

interface DateRangePickerProps {
  value: DateRange | undefined;
  onDateSelect: (range: DateRange | undefined) => void;
}

export function DateRangePicker({ value, onDateSelect }: DateRangePickerProps) {
  const [error, setError] = React.useState<string | null>(null);

  const minDate = addDays(new Date(), 7); // One week from today
  
  const handleSelect = (range: DateRange | undefined) => {
    setError(null);
    
    if (range?.from && range?.to) {
      // Check minimum trip duration
      const duration = differenceInDays(range.to, range.from);
      if (duration < 2) {
        setError('Trips must be at least 2 days long');
        return;
      } else {
        onDateSelect(range);
      }
    } else {
      onDateSelect(range);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <DayPicker
        mode="range"
        selected={value}
        onSelect={handleSelect}
        fromDate={minDate}
        numberOfMonths={1}
        className="mx-auto bg-white p-4 sm:p-6 rounded-xl"
        classNames={{
          months: "justify-center",
          month: "w-full max-w-[380px]"
        }}
      />
      {error && (
        <p className="text-red-500 text-sm mt-4 text-center font-medium">{error}</p>
      )}
      {value?.from && value?.to && !error && (
        <div className="mt-6 text-center">
        <p className="text-blue-600 font-semibold">
          {differenceInDays(value.to, value.from)} day trip selected
        </p>
        <p className="text-gray-500 text-sm mt-1">
          From {value.from.toLocaleDateString()} to {value.to.toLocaleDateString()}
        </p>
        </div>
      )}
    </div>
  )
}
