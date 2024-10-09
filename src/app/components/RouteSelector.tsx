// src/app/components/RouteSelector.tsx
import React from 'react';

interface RouteSelectorProps {
  onSelectRoute: (route: string) => void;
  onNext: () => void;
  onPrevious: () => void;
}

const routes = ['Trasa 1', 'Trasa 2', 'Trasa 3'];

const RouteSelector: React.FC<RouteSelectorProps> = ({ onSelectRoute, onNext, onPrevious }) => {
  return (
    <div>
      <h2>Wybierz trasę</h2>
      {routes.map((route, index) => (
        <button key={index} onClick={() => {
          onSelectRoute(route);
          onNext();
        }}>
          {route}
        </button>
      ))}
      <button onClick={onPrevious}>Wstecz</button>
    </div>
  );
};

export default RouteSelector;
