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
