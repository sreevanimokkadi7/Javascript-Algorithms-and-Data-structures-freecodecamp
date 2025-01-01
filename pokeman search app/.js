const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const types = document.getElementById('types');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');
const sprite = document.getElementById('sprite');

searchButton.addEventListener('click', async () => {
  const searchTerm = searchInput.value.toLowerCase();
  let pokemonData;

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
    pokemonData = await response.json();
  } catch (error) {
    alert('Pokémon not found');
    clearData();
    return;
  }

  pokemonName.textContent = pokemonData.name.toUpperCase();
  pokemonId.textContent = pokemonData.id;
  weight.textContent = `Weight: ${pokemonData.weight}`;
  height.textContent = `Height: ${pokemonData.height}`;

  types.innerHTML = ''; // Clear previous types
  pokemonData.types.forEach(type => {
    const typeElement = document.createElement('span');
    typeElement.textContent = type.type.name.toUpperCase();
    types.appendChild(typeElement);
  });

  hp.textContent = pokemonData.stats[0].base_stat;
  attack.textContent = pokemonData.stats[1].base_stat;
  defense.textContent = pokemonData.stats[2].base_stat;
  specialAttack.textContent = pokemonData.stats[3].base_stat;
  specialDefense.textContent = pokemonData.stats[4].base_stat;
  speed.textContent = pokemonData.stats[5].base_stat;

  sprite.src = pokemonData.sprites.front_default; 
});

function clearData() {
  pokemonName.textContent = '';
  pokemonId.textContent = '';
  weight.textContent = '';
  height.textContent = '';
  types.innerHTML = '';
  hp.textContent = '';
  attack.textContent = '';
  defense.textContent = '';
  specialAttack.textContent = '';
  specialDefense.textContent = '';
  speed.textContent = '';
  sprite.src = '';
}