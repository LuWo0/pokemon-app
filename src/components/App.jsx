import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getPokemonList = async () => {
      try{
        const jsonBlob = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=649&offset=0");
        const pokeList = await jsonBlob.data.results;
        setPokemon(pokeList);
      } catch(err){
        console.error(err);
      }
    }
    getPokemonList();
  }, []);

  return (
    <div>
      {pokemon.map(poke => (<p>{poke.name}</p>))}
    </div>
  )
}

export default App
