function NavBar({ pokemonIndex, pokemonListLength, setPokemonIndex }) {
  // bouton suivant :quand je clic sur suivant aller a l'image suivante
  function handleNextClick() {
    setPokemonIndex(pokemonIndex + 1);
  }
  //bouton precedent : retourner en arriere
  function handlePrecClick() {
    setPokemonIndex(pokemonIndex - 1);
  }

  return (
    <>
      <div>
        {pokemonIndex <= 0 ? (
          <div> no more pokemon </div>
        ) : (
          <button onClick={handlePrecClick}>Précèdent</button>
        )}
        {pokemonIndex < pokemonListLength - 1 ? (
          <button onClick={handleNextClick}>Suivant</button>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default NavBar;
