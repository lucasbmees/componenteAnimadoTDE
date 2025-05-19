import React, { useState, useEffect } from 'react';
import './RelogioAnalogicoGTA.css';

const RelogioAnalogicoGTA = () => { 
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000); 

    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDeg = (hours % 12 + minutes / 60) * 30;
  const minuteDeg = (minutes + seconds / 60) * 6;
  const secondDeg = seconds * 6;

  const formatTime = (unit) => unit.toString().padStart(2, '0');
  const digitalTime = `${formatTime(hours)}:${formatTime(minutes)}`;


  return (
    <div className="relogio-hud-wrapper"> 
      <div className="relogio-gta-container">
        <div className="relogio-gta-borda">
          <div className="relogio-gta-fundo">
            <div className="relogio-gta-marcador marcador-12"></div>
            <div className="relogio-gta-marcador marcador-3"></div>
            <div className="relogio-gta-marcador marcador-6"></div>
            <div className="relogio-gta-marcador marcador-9"></div>

            <div className="relogio-gta-ponteiro relogio-gta-hora" style={{ transform: `rotate(${hourDeg}deg)` }}></div>
            <div className="relogio-gta-ponteiro relogio-gta-minuto" style={{ transform: `rotate(${minuteDeg}deg)` }}></div>
            <div className="relogio-gta-ponteiro relogio-gta-segundo" style={{ transform: `rotate(${secondDeg}deg)` }}></div>
            <div className="relogio-gta-centro"></div>
          </div>
        </div>
      </div>

      <div className="relogio-digital-gta">
        {digitalTime}
      </div>
    </div>
  );
};

export default RelogioAnalogicoGTA; 
