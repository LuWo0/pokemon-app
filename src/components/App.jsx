import { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "./PokemonList";
import PageHeader from "./PageHeader";
import Databases from "./Databases"
import PokémonOfTheWeek from "./PokémonOfTheWeek";

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
      <div className="grid grid-cols-8 md:grid-cols-1">
        <div className="col-span-9 md:hidden">
          <PageHeader/>
        </div>
        <div className="col-span-1 w-100 bg-lime-700 md:hidden">
          <Databases  />
        </div>
        <div className="col-span-6">
          <PokemonList pokemon={pokemon} />
          <div className="flex justify-center items-center p-8">
          <button 
          className=" p-2 rounded-md border-none bg-lime-700 text-white hover:bg-lime-900" 
          onClick={getNextPokemon}>Next
          </button>
      </div>
        </div>
        <div className="col-span-1 w-100 bg-lime-700 md:hidden">
          <PokémonOfTheWeek />
        </div>
      </div>
      
    </>
  );
}

export default App;
