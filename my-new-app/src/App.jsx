import PokemonCard from "./components/PokemonCard"
//component 1
/*function App() {
  return (
    <div>
      < PokemonCard/>
    </div>
  );
}

export default App;*/

// props.1
function App() {

  const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];
  const pokemon = pokemonList[0];

  return (
    <div>
      < PokemonCard name={pokemon.name} imgSrc={pokemon.imgSrc} />
    </div>
  );
}

export default App;
