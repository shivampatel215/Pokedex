import React from 'react';
import './Pokecard.css';
 

function Pokecard(props) {

    const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
    let imgSrc = `${POKE_API}${props.id}.png`;
    // const [pokemon, setPokemon] = useState(pokemon);

    // const hidePokemon = () => {

    //     setPokemon({
    //         isActive: false

    //     });
    // }
    // const [showText, setShowText] = useState(false);
    // const onClick = () => setShowText(true);



    return (
        <div className="Pokecard">
            <h2>{props.name}</h2>
            {props.name ? <img src = {imgSrc}  alt={props.name} /> : null}
            <div className= "Pokecard-type">{props.type}</div>
            <div className= "Pokecard-exp">{props.exp}</div>

            

        </div>
    )
}

export default Pokecard
