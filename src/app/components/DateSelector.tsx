// src/app/components/DateSelector.tsx
"use client";

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { TimePicker } from 'react-time-picker';


interface DateSelectorProps {
  onSelectDate: (date: Date) => void;
  onNext: () => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ onSelectDate, onNext }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedHour, setSelectedHour] = useState<string>('08:00'); // Domyślny czas

  const handleConfirm = () => {
    if (selectedDate) {
      const [hour, minute] = selectedHour.split(':').map(Number);
      const dateTime = new Date(selectedDate);
      dateTime.setHours(hour, minute);
      onSelectDate(dateTime);
      onNext(); // Przejdź do następnego kroku
    }
  };

  return (
    <div className="date-selector"> {/* Dodaj klasę dla stylu */}
      <h2>Wybierz dzień i godzinę rezerwacji</h2>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText="Wybierz datę"
        isClearable
        showPopperArrow={false}
      />
      <TimePicker
        onChange={setSelectedHour}
        value={selectedHour}
        hourPlaceholder="HH"
        minutePlaceholder="MM"
      />
      <button onClick={handleConfirm}>Dalej</button>
    </div>
  );
};

export default DateSelector;
