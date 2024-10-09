"use client";
// src/app/components/ReservationSteps.tsx
import React, { useState } from 'react';
import DateSelector from './DateSelector';
import RouteSelector from './RouteSelector';
import PeopleCounter from './PeopleCounter';
import KayakSelector from './KayakSelector';
import UserInfoForm from './UserInfoForm';
import Confirmation from './Confirmation';

const ReservationSteps = () => {
  const [step, setStep] = useState(1);
  const [dateTime, setDateTime] = useState<Date | null>(null);
  const [route, setRoute] = useState<string>('');
  const [peopleCount, setPeopleCount] = useState<number>(1);
  
  const [twoPersonKayaks, setTwoPersonKayaks] = useState<number>(0);
  const [onePersonKayaks, setOnePersonKayaks] = useState<number>(0);
  const [userData, setUserData] = useState({ name: '', email: '', phone: '' });

  const handleNextStep = () => setStep((prev) => prev + 1);
  const handlePreviousStep = () => setStep((prev) => prev - 1);

  return (
<div className="bg-white p-4 border rounded shadow-md">

      {step === 1 && (
        <DateSelector onSelectDate={setDateTime} onNext={handleNextStep} />
      )}
      {step === 2 && (
        <RouteSelector onSelectRoute={setRoute} onNext={handleNextStep} onPrevious={handlePreviousStep} />
      )}
      {step === 3 && (
        <PeopleCounter onSelectCount={setPeopleCount} onNext={handleNextStep} onPrevious={handlePreviousStep} />
      )}
      {step === 4 && (
        <KayakSelector 
          twoPersonKayaks={twoPersonKayaks} 
          onePersonKayaks={onePersonKayaks} 
          setTwoPersonKayaks={setTwoPersonKayaks} 
          setOnePersonKayaks={setOnePersonKayaks} 
          onNext={handleNextStep} // Przekazanie onNext
        />
      )}
      {step === 5 && (
        <UserInfoForm onSubmit={setUserData} onNext={handleNextStep} onPrevious={handlePreviousStep} />
      )}
      {step === 6 && (
        <Confirmation 
          dateTime={dateTime} 
          route={route} 
          peopleCount={peopleCount} 
          userData={userData}
          twoPersonKayaks={twoPersonKayaks}
          onePersonKayaks={onePersonKayaks}
        />
      )}
      {step > 1 && step <= 6 && (
        <button onClick={handlePreviousStep}>Wstecz</button>
      )}
    </div>
  );
};

export default ReservationSteps;
