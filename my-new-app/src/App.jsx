import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";

// props.1
function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  useEffect(() => {
    // ton code à exécuter
    alert("hello pokemon trainer");
  }, []);

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];
  const pokemon = pokemonList[pokemonIndex];

  return (
    <div>
      <NavBar
        pokemonIndex={pokemonIndex}
        setPokemonIndex={setPokemonIndex}
        pokemonListLength={pokemonList.length}
        pokemonList={pokemonList}
        florent={pokemon}
      />
      <PokemonCard name={pokemon.name} imgSrc={pokemon.imgSrc} />
    </div>
  );
}

export default App;

// < PokemonCard props = {pokemon} />
