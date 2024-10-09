// src/app/components/PeopleCounter.tsx
import React, { useState } from 'react';

interface PeopleCounterProps {
  onSelectCount: (count: number) => void;
  onNext: () => void;
  onPrevious: () => void;
}

const PeopleCounter: React.FC<PeopleCounterProps> = ({ onSelectCount, onNext, onPrevious }) => {
  const [count, setCount] = useState<number>(1);

  return (
    <div>
      <h2>Wybierz liczbę osób</h2>
      <input type="number" value={count} onChange={(e) => setCount(Number(e.target.value))} min={1} max={8} />
      <button onClick={() => {
        onSelectCount(count);
        onNext();
      }}>
        Dalej
      </button>
      <button onClick={onPrevious}>Wstecz</button>
    </div>
  );
};

export default PeopleCounter;
