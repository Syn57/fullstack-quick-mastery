function fetchPokemonData(pokemonName: string): Promise<any> {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}
function displayPokemonData(pokemon: any): void {
  const pokemonContainer = document.getElementById('pokemon-container');
  if (pokemonContainer) {
    pokemonContainer.innerHTML = `
      <h2>${pokemon.name}</h2>
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
      <p>Height: ${pokemon.height}</p>
      <p>Weight: ${pokemon.weight}</p>
    `;
  }
}
function handleFetchError(error: Error): void {
  const pokemonContainer = document.getElementById('pokemon-container');
  if (pokemonContainer) {
    pokemonContainer.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}
function fetchAndDisplayPokemon(pokemonName: string): void {
  fetchPokemonData(pokemonName)
    .then(pokemon => {
      if (pokemon) {
        displayPokemonData(pokemon);
      }
    })
    .catch(handleFetchError);
}
document.addEventListener('DOMContentLoaded', () => {
  const fetchButton = document.getElementById('fetch-button');
  if (fetchButton) {
    fetchButton.addEventListener('click', () => {
      const pokemonNameInput = document.getElementById('pokemon-name') as HTMLInputElement;
      const pokemonName = pokemonNameInput.value.toLowerCase();
      fetchAndDisplayPokemon(pokemonName);
    });
  }
});

export { fetchPokemonData, displayPokemonData, handleFetchError, fetchAndDisplayPokemon };