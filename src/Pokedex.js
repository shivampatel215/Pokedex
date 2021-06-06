    import React, { useState, useEffect} from 'react';
    import Pokecard from './Pokecard';
    import './Pokedex.css'

    function Pokedex() {
        const pokemon = [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electrical', base_experience: 112},
            {id: 39, name: 'JigglyPuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65},
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electrical', base_experience: 112},
            {id: 39, name: 'JigglyPuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65},
        ];
        const [pokemonState, setPokemon] = useState(pokemon);
        const [count, setCount] = useState(0);
        const [currentlyClickedPokemon, setPokemonClick] = useState(-1);
        const[currentScore, setCurrentScore] = useState(0);


        // setPokemon({});


        const shuffle = (pokemon) => {
            // debugger;
            var currentIndex = pokemon.length, temporaryValue, randomIndex;
        
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
        
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            // And swap it with the current element.
            temporaryValue = pokemon[currentIndex];
            pokemon[currentIndex] = pokemon[randomIndex];
            pokemon[randomIndex] = temporaryValue;
            }
        
            setPokemon(pokemon);
            setCurrentScore(0);

            setTimeout(() => {
                hideAllPokemon();
              }, 5000);
        }

        const callCount = () => {
            setCount(count => count + 1);
            setCount(count => count + 1);
        }

        const hidePokemon = (index) => {
            // debugger;
            pokemonState[index].hide = true;
            setPokemon([...pokemonState]);
        }
        const showPokemon = (index) => {
            // debugger;
            // pokemonState[index].hide = false;
            // setPokemon([...pokemonState]);
            
            if(currentlyClickedPokemon === -1){
                pokemonState[index].hide = false;
                setPokemon([...pokemonState]);
                setPokemonClick(currentlyClickedPokemon => index);

            }
            if(currentlyClickedPokemon !== -1){
                pokemonState[index].hide = false;
                if(pokemonState[index].id === pokemonState[currentlyClickedPokemon].id) {
                    pokemonState[index].hide = false;
                    pokemonState[currentlyClickedPokemon].hide = false;
                    // delete pokemonState[currentlyClickedPokemon];
                    setPokemonClick(-1);
                    setPokemon([...pokemonState]);
                    setCurrentScore(currentScore+1);

                }
                else {
                    pokemonState[index].hide = true;
                    pokemonState[currentlyClickedPokemon].hide = true;
                    setPokemonClick(-1);
                    setPokemon([...pokemonState]);
                }

            }
        
        }
        const hideAllPokemon = () => {
            // debugger;
            pokemonState.map((p) => {

            
                p.hide=true;
                return p;
            })
            setPokemon([...pokemonState]);


        }
        
        return (
            <div className= "Pokedex">
                <div className="nav-bar">
                <h1 className = "pokedex-title" onClick={() => callCount()}>Pokemon Matching Game</h1>
                <h1 className= "pokedex-score">Score: {currentScore} </h1>
                </div>
                {/* <button onClick={() => hideAllPokemon()}>Hide</button> */}
                <button className = "button-play" onClick={() => shuffle(pokemon)}>Randomize Pokemon</button>
                <div className="Pokedex-cards">
                {pokemonState.map((p, index) => (
                    

                    <div style={{cursor: "pointer"} } className="pokecard-button" onClick = {() => showPokemon(index)}> {p.hide ?  <Pokecard />: 
                 <Pokecard id= {p.id} name={p.name} type={p.type} exp = {p.base_experience}/>
                } 
                </div>
                ))} 
                </div>
                 </div>
        )
    }

    export default Pokedex
