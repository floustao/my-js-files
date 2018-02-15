// 01 - Capitalize word
const capitalize = (word) => {
  const firstLetter = word[0].toUpperCase();
  const otherLetters = word.substr(1).toLowerCase();
  // interpolation
  return `${firstLetter}${otherLetters}`
};

const people = ['florEStan', 'saBina', 'guadalUpe'];
const newPeople = people.map(capitalize);
console.log(newPeople);

// 02 - IMAGE CIRCLE TOGGLE
//Toggle one specific image
const images = document.querySelectorAll('.togglable');
const toggle = (event) => {
    console.log(event);
    event.target.classList.toggle('img-circle');
  };

images.forEach(image => {
  image.addEventListener('click', toggle);
});

// 03 - WAGON RACE
// 1) move player

const player1 = document.getElementById('player1_race');
const player2 = document.getElementById('player2_race');
const replayButton = document.querySelector('.replay-btn');
const tds1 = player1.querySelectorAll('td');
const tds2 = player2.querySelectorAll('td');
const allTds = document.querySelectorAll('td');

// Step 4 : replay button
const replay = () => {
  replayButton.innerHTML = `<div class="text-center"><a href="" class="button btn btn-primary">Play again?</a></div>`;
};

// Step 3 : write winning announcement
const winnerIs = (player) => {
  document.querySelector('.banner').innerHTML = `<h1>Player ${player} wins!</h1>`;
};

// Step 1 : Move wagons
const movePlayer = event => {
  if (event.key === 'p') {
    const selected1 = player1.querySelector('td.active');
    const next1 = player1.querySelector('td.active + td');
    next1.classList.add('active');
    selected1.classList.remove('active');
  }
  else if (event.key === 'q') {
    const selected2 = player2.querySelector('td.active');
    const next2 = player2.querySelector('td.active + td');
    next2.classList.add('active');
    selected2.classList.remove('active');
  }
};

// Step 2 : Check who won
const checkWinner = (event) => {
  // case 1 : player 1 swins
  if (tds1[tds1.length - 2].classList.contains('active')) {
    winnerIs(1);
    window.removeEventListener('keyup', movePlayer); // freeze both players
    window.removeEventListener('keyup', checkWinner); // avoid repeating winning msg
    replay();
  }
  // case 2 : player 2 wins
  else if (tds2[tds2.length - 2].classList.contains('active')) {
    winnerIs(2);
    window.removeEventListener('keyup', movePlayer);
    window.removeEventListener('keyup', checkWinner);
    replay();
  }
};

// Final Step : Start the game
const runGame = () => {
  window.addEventListener('keyup', movePlayer);
  window.addEventListener('keyup', checkWinner);
  allTds.forEach(td => td.classList.remove('active'));
  tds1[1].classList.add('active');
  tds2[1].classList.add('active');
};

runGame();

// 04 - ALGOLIA SEARCH

// TODO: Autocomplete the input with AJAX calls.
const input = document.getElementById('search');
const results = document.getElementById('results');

const insertWord = (data) => {
  results.innerHTML = '';
  data.words.forEach((word) => {
    results.insertAdjacentHTML("beforeend", `<li>${word}</li>`);
  });
};

const algoliaSearch = (e) => {
  const link = `https://wagon-dictionary.herokuapp.com/autocomplete/${e.target.value}`;
  fetch(link)
    .then(response => response.json())
    .then(data => insertWord(data) );
};

input.addEventListener('keyup', algoliaSearch);

// 05 - GEOCODER
const formElement = document.getElementById('searchbar');

formElement.addEventListener('submit', (event) => {
  // prevent form's default behavior
  event.preventDefault();
  // get input value
  const address = document.getElementById('address').value;
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}`)
    .then(response => response.json())
    .then(data => {
      //get lat & lng in data
      const lat = data['results'][0]['geometry']['location']['lat'];
      const lng = data['results'][0]['geometry']['location']['lng'];
      //insert values in html
      const paragraphe = document.getElementById('coordinates');
      paragraphe.insertAdjacentHTML('afterbegin', `latitude: ${lat}`);
      paragraphe.insertAdjacentHTML('beforeend', `longitude: ${lng}`);
    });
});
