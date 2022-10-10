import { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "./PokemonList";
import PageHeader from "./PageHeader";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPoke, setCurrentPoke] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const jsonBlob = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${currentPoke}`
        );
        const pokeData = await jsonBlob.data;
        setLoading(true);
        return pokeData;
      } catch (err) {
        console.error(err);
        return;
      }
    };
    getPokemon()
      .then((data) => {
        setLoading(false);
        setPokemon((pokemon) => [...pokemon, data]);
      })
      .catch((err) => {
        console.log(err, "Error in the getPokemon");
      });
  }, [currentPoke]); // rerender whenever we click

  
  const getNextPokemon = (e) => {
    e.preventDefault();
    setCurrentPoke(currentPoke + 1);
  };

  const getNextFivePokemon = (e) => {
    e.preventDefault();

    setCurrentPoke(currentPoke + 1)
  }

  

  if (loading) return "Loading...";

  return (
    <>
      <PageHeader />
      <PokemonList pokemon={pokemon} />
      <div className="flex justify-center items-center p-8">
        <button 
        className=" p-2 rounded-md border-none bg-lime-700 text-white hover:bg-lime-900" 
        onClick={getNextPokemon}>Next
        </button>
      </div>
      {/* <button onClick={getAllPokemon}>Load all</button> */}
    </>
  );
}

export default App;
