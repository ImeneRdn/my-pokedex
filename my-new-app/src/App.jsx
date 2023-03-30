import PokemonCard from "./components/PokemonCard"

import { useState } from "react";
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
  const [pokemonIndex, setPokemonIndex] = useState (0);

  // bouton suivant :quand je clic sur suivant aller a l'image suivante
  function handleNextClick() {
    setPokemonIndex(pokemonIndex + 1);
  }
//bouton precedent : retourner en arriere
  function handlePrecClick(){
      setPokemonIndex(pokemonIndex -1)
    }

  
  
  const pokemonList= [
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




  return (<div>
      
    

      {pokemonIndex <= 0 ?

      <display:none></display:none>
      :
      <button onClick={handlePrecClick}>Précèdent</button>
      }

      

     {pokemonIndex < pokemonList.length - 1 ?

    <button onClick={handleNextClick}>Suivant</button>
     :
      
      <display:non></display:non>
     }
     < PokemonCard name={pokemon.name} imgSrc={pokemon.imgSrc} />
    </div>
  );
  }

export default App;


// < PokemonCard props = {pokemon} />