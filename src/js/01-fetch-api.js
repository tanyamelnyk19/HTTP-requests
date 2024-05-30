import pokemonCardTpl from '../templates/pokemon-card.hbs';
import API from './api-service';
import getRefs from './get-refs';
import '../css/common.css';

const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const input = form.elements.query;
  const usersValue = input.value;

  API.fetchPokemon(usersValue)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => form.reset());
}

function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  refs.cardContainer.insertAdjacentHTML('afterbegin', markup);
}

function onFetchError(error) {
  alert('Упс, что-то пошло не так и мы не нашли вашего покемона!');
}

// ==================

fetch('https://pixabay.com/api/?key=23192849-392e98e42aea5a2ff7de83472&q=yellow+flowers&image_type=photo&pretty=true`')
.then(r=>r.json())
.then(console.log)
















// const refs = getRefs();

// refs.searchForm.addEventListener('submit', onSearch);

// function onSearch(e) {
//   e.preventDefault();

//   const form = e.currentTarget;
//   const searchQuery = form.elements.query.value;

//   API.fetchPokemon(searchQuery)
//     .then(renderPokemonCard)
//     .catch(onFetchError)
//     .finally(() => form.reset());
// }

// function renderPokemonCard(pokemon) {
//   const markup = pokemonCardTpl(pokemon);
//   refs.cardContainer.innerHTML = markup;
// }

// function onFetchError(error) {
//   alert('Упс, что-то пошло не так и мы не нашли вашего покемона!');
// }

// // =========================================

// const url = 'https://newsapi.org/v2/everything?q=cars';
// const options = {
//   headers: {
//     Authorization: '4330ebfabc654a6992c2aa792f3173a3',
//   },
// };

// fetch(url, options)
//   .then(r => r.json())
//   .then(console.log);
