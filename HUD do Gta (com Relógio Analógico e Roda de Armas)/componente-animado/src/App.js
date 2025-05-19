import React, { useState } from 'react';
import RodaSelecaoArmas from './RodaSelecaoArmas';
import RelogioAnalogicoGTA from './RelogioAnalogicoGTA';
import './App.css';
import './HUD.css';
import './RelogioAnalogicoGTA.css'; 
function App() {
  const armasDoJogador = [
    { nome: 'Pistola', imagem: 'https://pngimg.com/uploads/gun/gun_PNG1384.png' },
    { nome: 'SMG', imagem: 'https://vignette.wikia.nocookie.net/fallout/images/8/8f/10mm_SMG_with_extended_mag_and_recoil_comp.png/revision/latest?cb=20110325204258' },
    { nome: 'Rifle de Assalto', imagem: 'https://pngimg.com/uploads/assault_rifle/assault_rifle_PNG1437.png' },
    { nome: 'Escopeta', imagem: 'https://pngimg.com/uploads/shotgun/shotgun_PNG70.png' },
    { nome: 'Granada', imagem: 'https://th.bing.com/th/id/R.9cd0e2aef30168762e6a04f753b0ae91?rik=dtOxvSgzxe3sCw&pid=ImgRaw&r=0' },
    { nome: 'Faca', imagem: 'https://static.vecteezy.com/system/resources/previews/029/139/404/non_2x/knife-kitchen-knife-kitchen-knife-with-transparent-background-ai-generative-free-png.png' },
    { nome: 'Arco e Flecha', imagem: 'https://png.pngtree.com/png-clipart/20220213/original/pngtree-antique-bow-and-arrow-set-png-image_7268357.png' },
  ];
  const [armaEquipada, setArmaEquipada] = useState(armasDoJogador[0]); 
  const handleWeaponSelection = (arma) => {
    setArmaEquipada(arma); 
    console.log(`Arma selecionada e equipada: ${arma.nome}`);
  };
  return (
    <div className="App">
      <img src="https://logopng.com.br/logos/gta-67.png" alt="Game Logo" className="game-logo" />
      <h1>Minha Aplicação de Jogo HUD GTA</h1>
      <p>Pressione <strong>Tab</strong> para abrir a roda de armas, use as <strong>setas</strong> para navegar e <strong>Enter</strong> ou <strong>Espaço</strong> para selecionar. Você também pode <strong>clicar</strong> para navegar e <strong>clicar duas vezes</strong> para selecionar.</p>
      <RodaSelecaoArmas armas={armasDoJogador} onSelectWeapon={handleWeaponSelection} />
      <div className="hud-arma-equipada">
        {armaEquipada ? (
          <>
            <img src={armaEquipada.imagem} alt={armaEquipada.nome} className="hud-arma-imagem" />
            <div className="hud-arma-info">
              <span className="hud-arma-nome">{armaEquipada.nome}</span>
            </div>
          </>
        ) : (
          <p>Nenhuma arma equipada.</p>
        )}
      </div>
      <RelogioAnalogicoGTA />
    </div>
  );
}
export default App;