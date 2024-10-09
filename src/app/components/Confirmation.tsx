// src/app/components/Confirmation.tsx
import React from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface ConfirmationProps {
  dateTime: Date | null;
  route: string;
  peopleCount: number;
  userData: { name: string; email: string; phone: string };
  twoPersonKayaks: number; // Nowa właściwość dla kajaków dwuosobowych
  onePersonKayaks: number;  // Nowa właściwość dla kajaków jednoosobowych
}

const Confirmation: React.FC<ConfirmationProps> = ({
  dateTime,
  route,
  peopleCount,
  userData,
  twoPersonKayaks,
  onePersonKayaks,
}) => {
  const handleConfirm = async () => {
    try {
      // Utwórz obiekt rezerwacji
      const reservation = {
        dateTime: dateTime?.toISOString(),
        route,
        peopleCount,
        twoPersonKayaks,
        onePersonKayaks,
        userData,
      };

      // Dodaj rezerwację do kolekcji 'reservations' w Firestore
      await addDoc(collection(db, 'reservations'), reservation);
      console.log('Rezerwacja potwierdzona:', reservation);
      alert('Rezerwacja została pomyślnie złożona!');
    } catch (error) {
      console.error('Błąd podczas dodawania rezerwacji:', error);
      alert('Wystąpił błąd podczas składania rezerwacji.');
    }
  };

  return (
    <div>
      <h2>Podsumowanie rezerwacji</h2>
      <p>Data i godzina: {dateTime?.toString()}</p>
      <p>Trasa: {route}</p>
      <p>Liczba osób: {peopleCount}</p>
      <p>Kajaki dwuosobowe: {twoPersonKayaks}</p>
      <p>Kajaki jednoosobowe: {onePersonKayaks}</p>
      <p>Imię i nazwisko: {userData.name}</p>
      <p>Adres e-mail: {userData.email}</p>
      <p>Numer telefonu: {userData.phone}</p>
      <button onClick={handleConfirm}>Potwierdź rezerwację</button>
    </div>
  );
};

export default Confirmation;
