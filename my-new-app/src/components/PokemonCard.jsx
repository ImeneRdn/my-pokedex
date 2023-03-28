function PokemonCard(){

    const pokemon = pokemonList[1];
    //condition? 
    return pokemon.imgSrc !== undefined ?
    
    //si c'est oui alors va chercher l'image
    <div>
        <figure>
            <img src= {pokemon.imgSrc}alt={pokemon.name} />
            <figcaption>"{pokemon.name}</figcaption>
        </figure>
    </div>
    // : 
    :
    //condition si c'est non
    <div>
        <figure>
            <p>???</p>
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    </div>
        
    
}
export default PokemonCard;

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