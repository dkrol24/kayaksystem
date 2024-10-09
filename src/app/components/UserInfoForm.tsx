// src/app/components/UserInfoForm.tsx
import React, { useState } from 'react';

interface UserInfoFormProps {
  onSubmit: (data: { name: string; email: string; phone: string }) => void;
  onNext: () => void;
  onPrevious: () => void;
}

const UserInfoForm: React.FC<UserInfoFormProps> = ({ onSubmit, onNext, onPrevious }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const handleSubmit = () => {
    onSubmit({ name, email, phone });
    onNext();
  };

  return (
    <div>
      <h2>Podaj dane osobowe</h2>
      <input type="text" placeholder="Imię i nazwisko" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Adres e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="tel" placeholder="Numer telefonu" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <button onClick={handleSubmit}>Zarezerwuj</button>
      <button onClick={onPrevious}>Wstecz</button>
    </div>
  );
};

export default UserInfoForm;
