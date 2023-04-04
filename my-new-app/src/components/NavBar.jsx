function NavBar({
  pokemonIndex,
  pokemonListLength,
  setPokemonIndex,
  pokemonButon,
}) {
  const handleClick = (pkmn) => {
    switch (pkmn.name) {
      case "bulbasaur":
        setPokemonIndex(0);
        break;
      case "charmander":
        setPokemonIndex(1);
        console.log(pokemonIndex);
        console.log(pkmn.name);
        break;
      case "squirtle":
        setPokemonIndex(2);
        break;
      case "pikachu":
        setPokemonIndex(3);
        break;
      case "mew":
        setPokemonIndex(4);
        break;
      default:
        alert("sorry");
    }
  };
  // bouton suivant :quand je clic sur suivant aller a l'image suivante
  /* function handleNextClick() {
    setPokemonIndex(pokemonIndex + 1);
  }
  //bouton precedent : retourner en arriere
  function handlePrecClick() {
    setPokemonIndex(pokemonIndex - 1);
  } */
  console.log(pokemonButon);
  return (
    <div>
      {pokemonButon.map((pkmn) => (
        <button key={pkmn.name} onClick={() => handleClick(pkmn)}>
          {pkmn.name}
        </button>
      ))}
    </div>
  );
}

export default NavBar;
