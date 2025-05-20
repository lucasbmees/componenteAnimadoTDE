# 🎮 Meu HUD Interativo de Jogo (Inspirado em GTA!) 🎮
Fiz esse HUD referente a atividade TDE de Componente Animado.
---
## O Que Você Encontrará Aqui?
* **Roda de Seleção de Armas:** Uma interface intuitiva, inspirada em jogos como GTA V, que permite ao jogador selecionar sua arma com facilidade. Você pode navegar com as setas do teclado, pressionar Enter ou Espaço para selecionar, ou simplesmente usar o mouse para navegar (clique simples) e selecionar (clique duplo).
* **HUD da Arma Equipada:** Uma área dedicada na tela que mostra claramente qual arma o jogador tem em mãos no momento, com sua imagem e nome. Uma pequena amostra de como seria a vida de um herói de ação!
* **Relógio Analógico Estilo GTA:** Para dar aquele toque de imersão, incluímos um relógio analógico que remete aos clássicos de mundo aberto, mantendo você (ou seu personagem) sempre no horário certo para a próxima missão!
* **React como Base:** Todo o projeto é construído em React, aproveitando seus hooks como `useState` para gerenciar o estado e `useEffect` para lidar com os eventos do teclado e do mouse, garantindo uma experiência fluida e responsiva.
---
## Como Funciona? 
* **`App.js`:** Este é o coração do projeto! Ele orquestra a montagem de todos os componentes, gerencia o estado da **arma atualmente equipada** usando `useState`, e passa as props necessárias para a `RodaSelecaoArmas`. É também onde o **logo central do jogo** é exibido, fixo e sutilmente transparente para não atrapalhar a jogabilidade, graças ao seu `z-index` e `position: fixed`.
* **`RodaSelecaoArmas.js`:** Este componente é o cérebro por trás da roda. Ele monitora eventos do teclado (`Tab` para abrir/fechar, setas para navegar, `Enter`/`Espaço` para selecionar) e do mouse (cliques) para criar a experiência interativa. 
* **`RelogioAnalogicoGTA.js`:** Um componente independente que se encarrega de exibir a hora atual de forma analógica, atualizando-se a cada segundo para manter o tempo preciso.
* **CSS (`App.css`, `HUD.css`, `RelogioAnalogicoGTA.css`):** Os estilos são cuidadosamente divididos para manter o código limpo e organizado. A mágica visual da roda, o posicionamento do HUD e o estilo retrô do relógio são todos definidos aqui. 


