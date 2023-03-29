
function PokemonCard(props){
    console.log(props);
    console.log(props.imgSrc);
    //condition? 
    return props.imgSrc !== undefined ?

   
    //si c'est oui alors va chercher l'image
    
        <figure>
            <img src= {props.imgSrc}alt={props.name} />
            <figcaption>"{props.name}</figcaption>
        </figure>
    
    // : 
    :
    //condition si c'est non
    
        <figure>
            <p>???</p>
            <figcaption>{props.name}</figcaption>
        </figure>
   
        
        
}
export default PokemonCard;

/*const propsList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/props/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];*/