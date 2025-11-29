const questions = {
  zoogdieren: [
    { question: "Welk dier is het grootste landzoogdier?", options: ["Nijlpaard", "Neushoorn", "Olifant", "Giraf"], correct: 2 },
    { question: "Hoeveel uur per dag slaapt een luiaard gemiddeld?", options: ["5 uur", "10 uur", "15 uur", "20 uur"], correct: 2 },
    { question: "Welk zoogdier kan vliegen?", options: ["Eekhoorn", "Vleermuis", "Lemur", "Opossum"], correct: 1 },
    { question: "Wat is het snelste landdier ter wereld?", options: ["Leeuw", "Gazelle", "Cheetah", "Paard"], correct: 2 },
    { question: "Welk zoogdier heeft de langste tong?", options: ["Miereneter", "Giraf", "Okapi", "Beer"], correct: 0 },
    { question: "Welk dier heeft de langste zwangerschap?", options: ["Walvis", "Olifant", "Giraf", "Neushoorn"], correct: 1 },
    { question: "Wat eet een panda voornamelijk?", options: ["Bamboe", "Bladeren", "Insecten", "Vis"], correct: 0 },
    { question: "Welk zoogdier legt eieren?", options: ["Kangoeroe", "Vogelbekdier", "Koala", "Opossum"], correct: 1 },
    { question: "Hoe noem je een groep leeuwen?", options: ["Kudde", "Troep", "School", "Zwerm"], correct: 1 },
    { question: "Welk dier heeft de grootste oren?", options: ["Konijn", "Afrikaanse olifant", "Fennec vos", "Ezel"], correct: 1 }
  ],
  vogels: [
    { question: "Welke vogel kan achteruit vliegen?", options: ["Zwaluw", "Kolibrie", "Koekoek", "Specht"], correct: 1 },
    { question: "Wat is de grootste vogel ter wereld?", options: ["Condor", "Albatros", "Struisvogel", "Arend"], correct: 2 },
    { question: "Welke vogel staat bekend om zijn dans?", options: ["Flamingo", "Paradijsvogel", "Pauw", "Kraanvogel"], correct: 1 },
    { question: "Hoeveel soorten pinguïns zijn er ongeveer?", options: ["5", "10", "18", "30"], correct: 2 },
    { question: "Welke vogel kan het beste praten?", options: ["Kaketoe", "Papegaai", "Ekster", "Kraai"], correct: 1 },
    { question: "Waar slapen flamingo's vaak op?", options: ["Twee benen", "Hun buik", "Eén been", "In het water"], correct: 2 },
    { question: "Welke vogel is een symbool van wijsheid?", options: ["Adelaar", "Raaf", "Uil", "Kraai"], correct: 2 },
    { question: "Wat is de snelste vogel ter wereld?", options: ["Arend", "Slechtvalk", "Zwaluw", "Albatros"], correct: 1 },
    { question: "Welke vogel kan niet vliegen?", options: ["Emoe", "Pelikaan", "Ooievaar", "Reiger"], correct: 0 },
    { question: "Hoe oud kan een papegaai worden?", options: ["10 jaar", "25 jaar", "50 jaar", "80 jaar"], correct: 3 }
  ],
  vissen: [
    { question: "Welke vis is de snelste?", options: ["Tonijn", "Haai", "Zeilvis", "Dolfijn"], correct: 2 },
    { question: "Hoeveel tanden kan een haai in zijn leven hebben?", options: ["100", "1.000", "10.000", "30.000"], correct: 3 },
    { question: "Welke vis kan elektriciteit maken?", options: ["Zwaardvis", "Sidderaal", "Pijlstaartrog", "Tonijn"], correct: 1 },
    { question: "Wat is de grootste vis ter wereld?", options: ["Blauwe vinvis", "Walvishaai", "Witte haai", "Reuzenhaai"], correct: 1 },
    { question: "Hoeveel procent van de oceaan is ontdekt?", options: ["5%", "20%", "50%", "80%"], correct: 0 },
    { question: "Welke vis zwemt stroomopwaarts om eieren te leggen?", options: ["Forel", "Zalm", "Karper", "Snoek"], correct: 1 },
    { question: "Wat is bijzonder aan de zeepaardjes?", options: ["Ze leven 100 jaar", "Mannetjes dragen de baby's", "Ze hebben geen vinnen", "Ze eten plastic"], correct: 1 },
    { question: "Welke vis kan over water 'vliegen'?", options: ["Vliegende vis", "Tonijn", "Makreel", "Sardine"], correct: 0 },
    { question: "Hoeveel armen heeft een inktvis?", options: ["6", "8", "10", "12"], correct: 1 },
    { question: "Welk dier is eigenlijk geen vis?", options: ["Haai", "Rog", "Dolfijn", "Paling"], correct: 2 }
  ],
  reptielen: [
    { question: "Wat is het grootste reptiel ter wereld?", options: ["Komodovaraan", "Anaconda", "Zoutwaterkrokodil", "Lederschildpad"], correct: 2 },
    { question: "Kunnen slangen hun kaak uit de kom halen?", options: ["Ja", "Nee", "Alleen gifslangen", "Alleen python's"], correct: 0 },
    { question: "Hoe oud kan een schildpad worden?", options: ["50 jaar", "100 jaar", "150 jaar", "200 jaar"], correct: 2 },
    { question: "Welk reptiel kan van kleur veranderen?", options: ["Gekko", "Kameleon", "Leguaan", "Alle drie"], correct: 1 },
    { question: "Hoeveel soorten slangen zijn giftig?", options: ["10%", "25%", "50%", "75%"], correct: 1 },
    { question: "Welke hagedis kan over water lopen?", options: ["Gekko", "Basilisk", "Leguaan", "Varaan"], correct: 1 },
    { question: "Wat eten de meeste schildpadden?", options: ["Alleen vlees", "Alleen planten", "Planten en vlees", "Alleen fruit"], correct: 2 },
    { question: "Welk reptiel heeft de sterkste beet?", options: ["Anaconda", "Krokodil", "Komodovaraan", "Alligator"], correct: 1 },
    { question: "Kunnen alle hagedissen hun staart afwerpen?", options: ["Ja", "Nee", "Alleen gekko's", "Alleen leguanen"], correct: 1 },
    { question: "Welke slang is de langste ter wereld?", options: ["Anaconda", "Koningscobra", "Netpython", "Boa constrictor"], correct: 2 }
  ],
  insecten: [
    { question: "Hoeveel poten heeft een insect?", options: ["4", "6", "8", "10"], correct: 1 },
    { question: "Welk insect maakt honing?", options: ["Wesp", "Hommel", "Bij", "Alle drie"], correct: 2 },
    { question: "Hoeveel ogen heeft een vlieg?", options: ["2", "5", "100", "Duizenden"], correct: 3 },
    { question: "Welk insect is het sterkste voor zijn grootte?", options: ["Mier", "Mestkever", "Sprinkhaan", "Kakkerlak"], correct: 1 },
    { question: "Hoe lang leeft een vlinder gemiddeld?", options: ["1 dag", "2-4 weken", "1 jaar", "5 jaar"], correct: 1 },
    { question: "Welk insect kan het hardst bijten?", options: ["Mier", "Kever", "Bidsprinkhaan", "Wesp"], correct: 0 },
    { question: "Hoeveel soorten mieren zijn er ongeveer?", options: ["100", "1.000", "12.000", "100.000"], correct: 2 },
    { question: "Welk insect is een spin?", options: ["Geen, spin is geen insect", "Tarantula", "Alle spinnen", "Hooiwagen"], correct: 0 },
    { question: "Wat eet een lieveheersbeestje?", options: ["Bladeren", "Bladluizen", "Nectar", "Hout"], correct: 1 },
    { question: "Welk insect maakt het hardste geluid?", options: ["Krekel", "Cicade", "Sprinkhaan", "Bij"], correct: 1 }
  ],
  huisdieren: [
    { question: "Hoeveel uur per dag slaapt een kat gemiddeld?", options: ["8 uur", "12-16 uur", "6 uur", "20 uur"], correct: 1 },
    { question: "Welk huisdier is het populairst in Nederland?", options: ["Hond", "Kat", "Konijn", "Vis"], correct: 1 },
    { question: "Hoe oud kan een goudvis worden?", options: ["1 jaar", "5 jaar", "10 jaar", "20+ jaar"], correct: 3 },
    { question: "Welke hond is de kleinste ter wereld?", options: ["Chihuahua", "Yorkshire terriër", "Pomeranian", "Maltezer"], correct: 0 },
    { question: "Hoeveel tenen heeft een cavia?", options: ["12", "14", "16", "18"], correct: 1 },
    { question: "Welk huisdier kan trucs leren doen?", options: ["Alleen honden", "Honden en katten", "Alle huisdieren", "Geen huisdieren"], correct: 2 },
    { question: "Hoe communiceren konijnen vaak?", options: ["Blaffen", "Met hun oren", "Zingen", "Fluiten"], correct: 1 },
    { question: "Welke vogel wordt vaak als huisdier gehouden?", options: ["Adelaar", "Parkiet", "Uil", "Duif"], correct: 1 },
    { question: "Hoe oud kan een hamster worden?", options: ["1-2 jaar", "2-3 jaar", "5-6 jaar", "10 jaar"], correct: 1 },
    { question: "Wat mag een hond absoluut niet eten?", options: ["Wortel", "Appel", "Chocolade", "Rijst"], correct: 2 }
  ]
};

const categories = ['zoogdieren', 'vogels', 'vissen', 'reptielen', 'insecten', 'huisdieren'];
const categoryNames = {
  zoogdieren: 'Zoogdieren',
  vogels: 'Vogels',
  vissen: 'Vissen',
  reptielen: 'Reptielen',
  insecten: 'Insecten',
  huisdieren: 'Huisdieren',
  bonus: 'Bonus'
};

const boardLayout = [
  ['start', 'zoogdieren', 'vogels', 'vissen', 'reptielen', 'insecten', 'huisdieren'],
  ['huisdieren', 'empty', 'empty', 'empty', 'empty', 'empty', 'zoogdieren'],
  ['insecten', 'empty', 'empty', 'empty', 'empty', 'empty', 'vogels'],
  ['bonus', 'empty', 'empty', 'empty', 'empty', 'empty', 'vissen'],
  ['reptielen', 'empty', 'empty', 'empty', 'empty', 'empty', 'reptielen'],
  ['vissen', 'empty', 'empty', 'empty', 'empty', 'empty', 'insecten'],
  ['vogels', 'zoogdieren', 'huisdieren', 'bonus', 'reptielen', 'vissen', 'huisdieren']
];

let socket = null;
let isOnlineMode = false;
let isHost = false;
let currentPin = '';
let myPlayerId = null;
let players = [];
let currentPlayerIndex = 0;
let gameBoard = [];
let usedQuestions = {};
const WINNING_SCORE = 10;

let tempPlayers = [];
let currentSelectingPlayer = 0;
let selectedCreateGenius = null;
let selectedJoinGenius = null;
const geniusData = {
  einstein: { name: 'Albert Einstein', emoji: '🧠', color: '#667eea' },
  curie: { name: 'Marie Curie', emoji: '⚗️', color: '#f093fb' },
  davinci: { name: 'Leonardo da Vinci', emoji: '🎨', color: '#4facfe' },
  newton: { name: 'Isaac Newton', emoji: '🍎', color: '#43e97b' },
  tesla: { name: 'Nikola Tesla', emoji: '⚡', color: '#fa709a' },
  darwin: { name: 'Charles Darwin', emoji: '🦎', color: '#a8edea' }
};

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  document.getElementById(screenId).classList.remove('hidden');
}

document.getElementById('create-btn').addEventListener('click', () => showScreen('create-screen'));
document.getElementById('join-btn').addEventListener('click', () => showScreen('join-screen'));
document.getElementById('local-btn').addEventListener('click', () => showScreen('local-screen'));
document.getElementById('to-pion-select-btn').addEventListener('click', goToPionSelect);
document.getElementById('start-local-btn').addEventListener('click', startLocalGame);

document.querySelectorAll('.genius-card').forEach(card => {
  card.addEventListener('click', () => selectGenius(card.dataset.genius));
});

document.querySelectorAll('#create-genius-grid .genius-card-small').forEach(card => {
  card.addEventListener('click', () => selectOnlineGenius('create', card.dataset.genius));
});

document.querySelectorAll('#join-genius-grid .genius-card-small').forEach(card => {
  card.addEventListener('click', () => selectOnlineGenius('join', card.dataset.genius));
});

function selectOnlineGenius(mode, geniusId) {
  const gridId = mode === 'create' ? 'create-genius-grid' : 'join-genius-grid';
  const grid = document.getElementById(gridId);
  
  grid.querySelectorAll('.genius-card-small').forEach(c => c.classList.remove('selected'));
  grid.querySelector(`[data-genius="${geniusId}"]`).classList.add('selected');
  
  if (mode === 'create') {
    selectedCreateGenius = geniusId;
  } else {
    selectedJoinGenius = geniusId;
  }
}
document.getElementById('create-game-btn').addEventListener('click', createOnlineGame);
document.getElementById('join-game-btn').addEventListener('click', joinOnlineGame);
document.getElementById('start-online-btn').addEventListener('click', startOnlineGame);
document.getElementById('roll-btn').addEventListener('click', rollDice);
document.getElementById('continue-btn').addEventListener('click', continueGame);
document.getElementById('play-again-btn').addEventListener('click', () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
  showScreen('menu-screen');
});

function connectSocket() {
  if (socket) return;
  
  socket = io({
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionAttempts: 10,
    transports: ['websocket', 'polling']
  });
  
  socket.on('connect', () => {
    myPlayerId = socket.id;
    console.log('Connected:', myPlayerId);
  });
  
  socket.on('connect_error', (error) => {
    console.log('Connection error:', error);
  });
  
  socket.on('disconnect', (reason) => {
    console.log('Disconnected:', reason);
  });
  
  socket.on('game_created', (data) => {
    currentPin = data.pin;
    isHost = true;
    players = data.players;
    showLobby();
  });
  
  socket.on('joined_game', (data) => {
    currentPin = data.pin;
    players = data.players;
    showLobby();
  });
  
  socket.on('player_joined', (data) => {
    players = data.players;
    updateLobbyPlayers();
  });
  
  socket.on('player_left', (data) => {
    players = data.players;
    if (data.currentPlayerIndex !== undefined) {
      currentPlayerIndex = data.currentPlayerIndex;
    }
    updateLobbyPlayers();
    if (document.getElementById('game-screen').classList.contains('hidden') === false) {
      updateScores();
      updatePlayerTokens();
      updateTurnIndicator();
    }
  });
  
  socket.on('error', (data) => {
    const errorEl = document.getElementById('join-error');
    errorEl.textContent = data.message;
    errorEl.classList.remove('hidden');
  });
  
  socket.on('game_started', (data) => {
    players = data.players;
    currentPlayerIndex = data.currentPlayerIndex;
    startGame();
  });
  
  socket.on('dice_rolled', (data) => {
    const dice = document.getElementById('dice');
    dice.classList.add('rolling');
    
    setTimeout(() => {
      dice.textContent = data.result;
      dice.classList.remove('rolling');
      players = data.players;
      updatePlayerTokens();
      
      const currentPlayer = players[currentPlayerIndex];
      const cellType = gameBoard[currentPlayer.position].type;
      
      if (isMyTurn()) {
        showQuestion(cellType);
      }
    }, 500);
  });
  
  socket.on('turn_changed', (data) => {
    players = data.players;
    currentPlayerIndex = data.currentPlayerIndex;
    updateScores();
    updateTurnIndicator();
  });
  
  socket.on('game_over', (data) => {
    players = data.players;
    showWinner();
  });
}

function createOnlineGame() {
  const name = document.getElementById('host-name').value.trim() || 'Host';
  const genius = selectedCreateGenius || 'einstein';
  isOnlineMode = true;
  connectSocket();
  socket.emit('create_game', { name, genius });
}

function joinOnlineGame() {
  const name = document.getElementById('join-name').value.trim() || 'Speler';
  const pin = document.getElementById('game-pin').value.trim();
  const genius = selectedJoinGenius || 'curie';
  
  if (pin.length !== 6) {
    const errorEl = document.getElementById('join-error');
    errorEl.textContent = 'Voer een geldige 6-cijferige PIN in';
    errorEl.classList.remove('hidden');
    return;
  }
  
  isOnlineMode = true;
  isHost = false;
  connectSocket();
  socket.emit('join_game', { name, pin, genius });
}

function showLobby() {
  document.getElementById('lobby-pin').textContent = currentPin;
  updateLobbyPlayers();
  showScreen('lobby-screen');
}

function updateLobbyPlayers() {
  const listEl = document.getElementById('lobby-player-list');
  const countEl = document.getElementById('player-count');
  const startBtn = document.getElementById('start-online-btn');
  const waitingMsg = document.getElementById('waiting-message');
  
  countEl.textContent = players.length;
  
  listEl.innerHTML = players.map((p, i) => {
    const genius = p.genius && geniusData[p.genius];
    const emoji = genius ? genius.emoji : '';
    const color = genius ? genius.color : '';
    return `
    <div class="lobby-player">
      <span class="player-dot p${i}" style="${color ? `background: ${color}` : ''}">${emoji}</span>
      <span>${p.name}</span>
      ${genius ? `<span class="genius-badge">${geniusData[p.genius].name.split(' ').pop()}</span>` : ''}
      ${i === 0 ? '<span class="host-badge">HOST</span>' : ''}
    </div>
  `}).join('');
  
  if (isHost) {
    startBtn.classList.remove('hidden');
    waitingMsg.classList.add('hidden');
  } else {
    startBtn.classList.add('hidden');
    waitingMsg.classList.remove('hidden');
  }
}

function startOnlineGame() {
  socket.emit('start_game', { pin: currentPin });
}

function goToPionSelect() {
  tempPlayers = [];
  
  for (let i = 1; i <= 4; i++) {
    const name = document.getElementById(`player${i}`).value.trim();
    if (name || i === 1) {
      tempPlayers.push({
        id: `local-${i}`,
        name: name || `Speler ${i}`,
        position: 0,
        score: 0,
        genius: null
      });
    }
  }
  
  currentSelectingPlayer = 0;
  resetGeniusCards();
  updatePionSelectUI();
  showScreen('pion-select-screen');
}

function resetGeniusCards() {
  document.querySelectorAll('.genius-card').forEach(card => {
    card.classList.remove('selected', 'taken');
  });
}

function updatePionSelectUI() {
  const playerName = tempPlayers[currentSelectingPlayer].name;
  document.getElementById('selecting-player-name').textContent = playerName;
  
  const startBtn = document.getElementById('start-local-btn');
  if (currentSelectingPlayer >= tempPlayers.length) {
    startBtn.classList.remove('hidden');
  } else {
    startBtn.classList.add('hidden');
  }
}

function selectGenius(geniusId) {
  if (currentSelectingPlayer >= tempPlayers.length) return;
  
  const card = document.querySelector(`.genius-card[data-genius="${geniusId}"]`);
  if (card.classList.contains('taken')) return;
  
  tempPlayers[currentSelectingPlayer].genius = geniusId;
  
  card.classList.add('taken');
  
  currentSelectingPlayer++;
  
  if (currentSelectingPlayer >= tempPlayers.length) {
    document.getElementById('start-local-btn').classList.remove('hidden');
    document.querySelector('.current-player-select').innerHTML = 
      '<span style="color: #1a5f2a; font-weight: bold;">Alle spelers hebben gekozen!</span>';
  } else {
    updatePionSelectUI();
  }
}

function startLocalGame() {
  isOnlineMode = false;
  players = tempPlayers.map(p => ({...p}));
  
  currentPlayerIndex = 0;
  startGame();
}

function startGame() {
  usedQuestions = {};
  categories.forEach(cat => usedQuestions[cat] = []);
  
  createBoard();
  updateScores();
  updateTurnIndicator();
  
  if (isOnlineMode) {
    document.getElementById('online-pin').classList.remove('hidden');
    document.getElementById('game-pin-display').textContent = currentPin;
  } else {
    document.getElementById('online-pin').classList.add('hidden');
  }
  
  showScreen('game-screen');
}

function createBoard() {
  const gameBoardEl = document.getElementById('game-board');
  gameBoardEl.innerHTML = '';
  gameBoard = [];
  let cellIndex = 0;
  
  const pathOrder = [];
  for (let col = 0; col < 7; col++) pathOrder.push([0, col]);
  for (let row = 1; row < 7; row++) pathOrder.push([row, 6]);
  for (let col = 5; col >= 0; col--) pathOrder.push([6, col]);
  for (let row = 5; row >= 1; row--) pathOrder.push([row, 0]);
  
  const pathSet = new Set(pathOrder.map(([r, c]) => `${r},${c}`));
  
  for (let row = 0; row < boardLayout.length; row++) {
    for (let col = 0; col < boardLayout[row].length; col++) {
      const cellType = boardLayout[row][col];
      const cell = document.createElement('div');
      cell.className = `board-cell ${cellType}`;
      
      if (cellType === 'start') {
        cell.textContent = 'START';
      } else if (cellType === 'bonus') {
        cell.textContent = '★';
      } else if (cellType !== 'empty') {
        cell.textContent = cellIndex + 1;
      }
      
      if (cellType !== 'empty' && pathSet.has(`${row},${col}`)) {
        cell.dataset.index = cellIndex;
        gameBoard.push({ element: cell, type: cellType, row, col });
        cellIndex++;
      }
      
      gameBoardEl.appendChild(cell);
    }
  }
  
  updatePlayerTokens();
}

function updatePlayerTokens() {
  document.querySelectorAll('.player-token').forEach(t => t.remove());
  
  players.forEach((player, index) => {
    if (player.position < gameBoard.length) {
      const token = document.createElement('div');
      token.className = `player-token p${index}`;
      token.title = player.name;
      
      if (player.genius && geniusData[player.genius]) {
        token.textContent = geniusData[player.genius].emoji;
        token.style.background = geniusData[player.genius].color;
      }
      
      gameBoard[player.position].element.appendChild(token);
    }
  });
}

function updateScores() {
  const playerScoresEl = document.getElementById('player-scores');
  playerScoresEl.innerHTML = players.map((p, i) => {
    const genius = p.genius && geniusData[p.genius];
    const emoji = genius ? genius.emoji : '';
    const color = genius ? genius.color : '';
    return `<div class="player-score ${i === currentPlayerIndex ? 'active' : ''}">
      <span class="score-dot p${i}" ${color ? `style="background: ${color}"` : ''}>${emoji}</span>
      ${p.name}: ${p.score} punten
    </div>`;
  }).join('');
}

function updateTurnIndicator() {
  const currentPlayerEl = document.getElementById('current-player');
  const rollBtn = document.getElementById('roll-btn');
  const notYourTurn = document.getElementById('not-your-turn');
  
  currentPlayerEl.textContent = players[currentPlayerIndex].name;
  
  if (isOnlineMode) {
    if (isMyTurn()) {
      rollBtn.classList.remove('hidden');
      rollBtn.disabled = false;
      notYourTurn.classList.add('hidden');
    } else {
      rollBtn.classList.add('hidden');
      notYourTurn.classList.remove('hidden');
    }
  } else {
    rollBtn.classList.remove('hidden');
    rollBtn.disabled = false;
    notYourTurn.classList.add('hidden');
  }
}

function isMyTurn() {
  if (!isOnlineMode) return true;
  return players[currentPlayerIndex].id === myPlayerId;
}

function rollDice() {
  const rollBtn = document.getElementById('roll-btn');
  rollBtn.disabled = true;
  
  if (isOnlineMode) {
    socket.emit('roll_dice', { pin: currentPin });
  } else {
    const dice = document.getElementById('dice');
    dice.classList.add('rolling');
    
    let rolls = 0;
    const rollInterval = setInterval(() => {
      dice.textContent = Math.floor(Math.random() * 6) + 1;
      rolls++;
      if (rolls >= 10) {
        clearInterval(rollInterval);
        const result = Math.floor(Math.random() * 6) + 1;
        dice.textContent = result;
        dice.classList.remove('rolling');
        movePlayer(result);
      }
    }, 100);
  }
}

function movePlayer(steps) {
  const player = players[currentPlayerIndex];
  const boardLength = gameBoard.length;
  let stepsRemaining = steps;
  let currentStep = player.position;
  
  const moveInterval = setInterval(() => {
    stepsRemaining--;
    currentStep = (currentStep + 1) % boardLength;
    player.position = currentStep;
    updatePlayerTokens();
    
    if (stepsRemaining <= 0) {
      clearInterval(moveInterval);
      showQuestion(gameBoard[currentStep].type);
    }
  }, 300);
}

function showQuestion(category) {
  let questionCategory_ = category;
  if (category === 'bonus' || category === 'start') {
    questionCategory_ = categories[Math.floor(Math.random() * categories.length)];
  }
  
  const categoryQuestions = questions[questionCategory_];
  let availableQuestions = categoryQuestions.filter((_, i) => !usedQuestions[questionCategory_].includes(i));
  
  if (availableQuestions.length === 0) {
    usedQuestions[questionCategory_] = [];
    availableQuestions = categoryQuestions;
  }
  
  const questionIndex = categoryQuestions.indexOf(availableQuestions[Math.floor(Math.random() * availableQuestions.length)]);
  usedQuestions[questionCategory_].push(questionIndex);
  
  const q = categoryQuestions[questionIndex];
  
  const questionCategoryEl = document.getElementById('question-category');
  questionCategoryEl.textContent = categoryNames[questionCategory_];
  questionCategoryEl.className = `question-category ${questionCategory_}`;
  document.getElementById('modal-question').textContent = q.question;
  
  const modalOptions = document.getElementById('modal-options');
  modalOptions.innerHTML = '';
  q.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'option';
    button.textContent = option;
    button.addEventListener('click', () => selectAnswer(index, q.correct, category === 'bonus'));
    modalOptions.appendChild(button);
  });
  
  document.getElementById('feedback').classList.add('hidden');
  document.getElementById('continue-btn').classList.add('hidden');
  document.getElementById('question-modal').classList.remove('hidden');
}

function selectAnswer(selected, correct, isBonus) {
  const options = document.getElementById('modal-options').querySelectorAll('.option');
  const player = players[currentPlayerIndex];
  const feedback = document.getElementById('feedback');
  
  options.forEach((option, i) => {
    option.classList.add('disabled');
    if (i === correct) {
      option.classList.add('correct');
    } else if (i === selected && i !== correct) {
      option.classList.add('incorrect');
    }
  });
  
  const isCorrect = selected === correct;
  
  if (isCorrect) {
    const points = isBonus ? 2 : 1;
    player.score += points;
    feedback.textContent = isBonus ? 'Goed! +2 bonuspunten!' : 'Goed! +1 punt!';
    feedback.className = 'feedback correct';
  } else {
    feedback.textContent = 'Helaas, dat was niet juist.';
    feedback.className = 'feedback incorrect';
  }
  
  feedback.classList.remove('hidden');
  document.getElementById('continue-btn').classList.remove('hidden');
  updateScores();
  
  if (player.score >= WINNING_SCORE) {
    document.getElementById('continue-btn').textContent = 'Bekijk Winnaar!';
  }
  
  if (isOnlineMode) {
    socket.emit('answer_question', { 
      pin: currentPin, 
      correct: isCorrect, 
      isBonus: isBonus 
    });
  }
}

function continueGame() {
  document.getElementById('question-modal').classList.add('hidden');
  document.getElementById('continue-btn').textContent = 'Volgende Beurt';
  
  const player = players[currentPlayerIndex];
  if (player.score >= WINNING_SCORE) {
    showWinner();
    return;
  }
  
  if (!isOnlineMode) {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    updateScores();
    updateTurnIndicator();
    document.getElementById('roll-btn').disabled = false;
  }
}

function showWinner() {
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
  const winner = sortedPlayers[0];
  
  document.getElementById('winner-name').textContent = winner.name;
  
  document.getElementById('final-scores').innerHTML = sortedPlayers.map((p, i) => 
    `<div class="final-score-item"><span>${i + 1}. ${p.name}</span><span>${p.score} punten</span></div>`
  ).join('');
  
  showScreen('winner-screen');
  document.getElementById('question-modal').classList.add('hidden');
}