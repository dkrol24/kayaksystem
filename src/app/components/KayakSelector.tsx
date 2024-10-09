// src/app/components/KayakSelector.tsx
"use client";

import React from 'react';

interface KayakSelectorProps {
  twoPersonKayaks: number;
  onePersonKayaks: number;
  setTwoPersonKayaks: (count: number) => void;
  setOnePersonKayaks: (count: number) => void;
  onNext: () => void; // Dodanie propsa do obsługi nawigacji
}

const KayakSelector: React.FC<KayakSelectorProps> = ({
  twoPersonKayaks,
  onePersonKayaks,
  setTwoPersonKayaks,
  setOnePersonKayaks,
  onNext, // Destrukturyzacja nowego propsa
}) => {
  return (
    <div>
      <h2>Wybierz ilość kajaków</h2>
      <div>
        <label>Kajaki dwuosobowe (2 osoby + dziecko do 6 lat): </label>
        <input
          type="number"
          value={twoPersonKayaks}
          min="0"
          onChange={(e) => setTwoPersonKayaks(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Kajaki jednoosobowe: </label>
        <input
          type="number"
          value={onePersonKayaks}
          min="0"
          onChange={(e) => setOnePersonKayaks(Number(e.target.value))}
        />
      </div>
      <button onClick={onNext}>Dalej</button> {/* Dodanie przycisku */}
    </div>
  );
};

export default KayakSelector;
