import { useState, useEffect } from 'react'
import axios from 'axios';
import PokemonList from './PokemonList';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPoke, setCurrentPoke] = useState(1);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const getPokemon = async () => {
      try{
        const jsonBlob = await axios.get(`https://pokeapi.co/api/v2/pokemon/${currentPoke}`);
        const pokeData = await jsonBlob.data;
        setLoading(true);
        return pokeData;
      } catch(err){
        console.error(err);
        return;
      }
    }

    getPokemon()
      .then(data => {
        setLoading(false);
        setPokemon(pokemon => [...pokemon, data]);
      })
      .catch(err => {
        console.log(err, "Error in the getPokemon");
      });
    
  }, [currentPoke]); // rerender whenever we click 


  const getNextPokemon = (e) => {
    e.preventDefault();
    setCurrentPoke(currentPoke + 1);
  }

  if (loading) return "Loading...";
  console.log(pokemon);
  return (
    <>
      <PokemonList pokemon={pokemon} />
      <button onClick={getNextPokemon}>Next</button>
    </>
  )
}

export default App
