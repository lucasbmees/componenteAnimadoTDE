import React, { useState, useEffect, useCallback } from 'react';
import './RodaSelecaoArmas.css';

const RodaSelecaoArmas = ({ armas, onSelectWeapon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const numArmas = armas.length;

  const handleSelectWeapon = useCallback(() => {
    if (numArmas > 0 && onSelectWeapon) {
      onSelectWeapon(armas[selectedIndex]);
      setIsOpen(false);
    }
  }, [armas, selectedIndex, numArmas, onSelectWeapon]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isOpen) {
        if (event.key === 'ArrowRight') {
          setSelectedIndex((prevIndex) => (prevIndex + 1) % numArmas);
        } else if (event.key === 'ArrowLeft') {
          setSelectedIndex((prevIndex) => (prevIndex - 1 + numArmas) % numArmas);
        } else if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          handleSelectWeapon();
        } else if (event.key === 'Escape') {
          setIsOpen(false);
        }
      } else if (event.key === 'Tab') {
        event.preventDefault(); 
        setIsOpen(true);
        setSelectedIndex(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, numArmas, selectedIndex, handleSelectWeapon]);

  const itemAngle = 360 / numArmas;
  const radius = 120; // Raio da roda, ajustável.

  return (
    <div className="roda-container">

      <div className={`roda ${isOpen ? 'aberta' : ''}`}>
        {armas.map((arma, index) => {
          const angleRad = ((index * itemAngle) - 90) * (Math.PI / 180); 
          const x = radius * Math.cos(angleRad);
          const y = radius * Math.sin(angleRad);

          const isSelected = index === selectedIndex;

          return (
            <div
              key={index}
              className={`arma-item ${isSelected ? 'selecionada' : ''}`}
              style={{
                transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
              }}
              onClick={() => setSelectedIndex(index)}
              onDoubleClick={handleSelectWeapon}
            >
              <img src={arma.imagem} alt={arma.nome} />
              <span className="arma-nome">{arma.nome}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RodaSelecaoArmas;
