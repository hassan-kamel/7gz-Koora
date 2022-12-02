// Object of Data
let players;
let classAPlayers = [];
let classBPlayers = [];
let classCPlayers = [];
let classDPlayers = [];
let classEPlayers = [];

// function to get numbers of player on spacefic class

const playersClasses = () => {
  players.forEach((player) => {
    if (player.class == 'A') classAPlayers.push(player);
    else if (player.class == 'B') classBPlayers.push(player);
    else if (player.class == 'C') classCPlayers.push(player);
    else if (player.class == 'D') classDPlayers.push(player);
    else if (player.class == 'E') classEPlayers.push(player);
  });
};

const changeClasses = () => {
  const classesEl = document.getElementById('classes');

  const innedHtml = `
  
  <ul class="rounded-md border border-gray-100 bg-white shadow-lg flex flex-col  gap-3 p-2 text-right">
                  <span class="px-4 py-2  text-base text-green-600  bg-green-50">فئة اولي</span>
                  ${classAPlayers.map((player) => {
                    return `<li>${player.name}</li>`;
                  })} 
              </ul>
              <ul class="rounded-md border border-gray-100 bg-white shadow-lg flex flex-col  gap-3 p-2 text-right">
                  <span class="px-4 py-2  text-base text-yellow-600  bg-yellow-50">فئة ثانية</span>
                  ${classBPlayers.map((player) => {
                    return `<li>${player.name}</li>`;
                  })}
              </ul>
              <ul class="rounded-md border border-gray-100 bg-white shadow-lg flex flex-col  gap-3 p-2 text-right">
                  <span class="px-4 py-2  text-base text-orange-600  bg-orange-50">فئة ثالثة</span>
                  ${classCPlayers.map((player) => {
                    return `<li>${player.name}</li>`;
                  })}
              </ul>
              <ul class="rounded-md border border-gray-100 bg-white shadow-lg flex flex-col  gap-3 p-2 text-right">
                  <span class="px-4 py-2  text-base text-red-600  bg-red-50">فئة رابعة</span>
                  ${classDPlayers.map((player) => {
                    return `<li>${player.name}</li>`;
                  })}
              </ul>
              <ul class="rounded-md border border-gray-100 bg-white shadow-lg flex flex-col  gap-3 p-2 text-right">
                  <span class="px-4 py-2  text-base text-red-900  bg-red-50">فئة خامسة</span>
                  ${classEPlayers.map((player) => {
                    return `<li>${player.name}</li>`;
                  })}
              </ul>
  
  `;
  classesEl.innerHTML = innedHtml;
};

if (localStorage.getItem('players')) {
  players = JSON.parse(localStorage.getItem('players'));
  playersClasses();
  changeClasses();
  console.log('classAPlayers: ', classAPlayers);
  console.log('classBPlayers: ', classBPlayers);
  console.log('classCPlayers: ', classCPlayers);
  console.log('classDPlayers: ', classDPlayers);
  console.log('classEPlayers: ', classEPlayers);
} else {
  players = [
    // {
    //     name:'',
    //     class:''
    // }
  ];
}

console.log(players);

// Toggle Adding Form

const popupEl = document.getElementById('popup');
const addPlayerBtn = document.getElementById('add-player');
const addPlayerCloseBtn = document.getElementById('add-close');

addPlayerBtn.addEventListener('click', () => {
  popupEl.classList.toggle('hidden');
});
addPlayerCloseBtn.addEventListener('click', () => {
  popupEl.classList.toggle('hidden');
});

// Get Elements Of Adding Form

const playerNameElement = document.getElementById('player');
const playerClassElement = document.getElementById('class');
const addingBtnElement = document.getElementById('adding');

// Adding Form Values Holder

let playerName = '';
let playerClass = '';
let errorMsg = false;

// Adding Events To Adding Form

playerNameElement.addEventListener('change', (e) => {
  playerName = e.target.value;
});
playerClassElement.addEventListener('change', (e) => {
  playerClass = e.target.value;
});
addingBtnElement.addEventListener('click', (e) => {
  if (playerClass == 'A' && classAPlayers.length < 3)
    classAPlayers.push(player);
  else if (playerClass == 'B' && classBPlayers.length < 3)
    classBPlayers.push(player);
  else if (playerClass == 'C' && classCPlayers.length < 3)
    classCPlayers.push(player);
  else if (playerClass == 'D' && classDPlayers.length < 3)
    classDPlayers.push(player);
  else if (playerClass == 'E' && classEPlayers.length < 3)
    classEPlayers.push(player);
  else errorMsg = true;

  if (playerClass && playerName && !errorMsg) {
    players.push({ name: playerName, class: playerClass });
    playerNameElement.value = '';
    playerClassElement.value = '';
    errorMsg = false;
    document.getElementById('error').classList.add('hidden');
    changeClasses();
  } else {
    document.getElementById('error').classList.remove('hidden');
    errorMsg = false;
  }
  localStorage.setItem('players', JSON.stringify(players));
  console.log(players);
});

// Showing Data Of Players
