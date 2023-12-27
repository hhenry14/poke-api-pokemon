import { useEffect, useState } from "react";
import CardPokemon from "../component/CardPokemon";

import imgPokemon from "../assets/images/pokemon.png";

const Home = () => {
  const [dataPokemon, setDataPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [count, setCount] = useState(0);
  const limit = 20;

  const nextListPokemon = () => {
    setCount(count + 1);
  };
  const previousListPokemon = () => {
    if (count > 0) setCount(count - 1);
    else setCount(0);
  };

  const getPokemones = async () => {
    try {
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=${
          count * limit
        }&limit=${limit}`
      );
      if (!data) throw new Error("erro feching data :D");
      const res = await data.json();
      setDataPokemon(res.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPokemones();
  }, [getPokemones]);

  //usando el use personalizado
  //cont {data,loading,error} =useFetch(url)
  if (loading) return <p>{console.log("loading xd")}</p>;
  if (error) return <p>{console.log("error xd")}</p>;
  return (
    <div className="max-w-[1200px] m-auto">
      <h1>
        <img src={imgPokemon} alt="" />
      </h1>
      <div className="flex  gap-2 justify-center items-center">
        <button
          onClick={previousListPokemon}
          className=" bg-gray-200 px-4 py-2 rounded-xl min-w-[100px] hover:font-bold hover:bg-red-200"
        >
          Atras
        </button>
        <button
          onClick={nextListPokemon}
          className=" bg-gray-200 px-4 py-2 rounded-xl min-w-[100px] hover:font-bold hover:bg-red-200"
        >
          Siguiente
        </button>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 p-4 md:grid-cols-4">
        {dataPokemon.length === 0 ? (
          <p>datos bacios</p>
        ) : (
          dataPokemon.map((pokemon) => (
            <CardPokemon key={pokemon.name} pokemon={pokemon} />
          ))
        )}
      </div>
      <div className="flex  gap-2 justify-center items-center">
        <button
          onClick={previousListPokemon}
          className=" bg-gray-200 px-4 py-2 rounded-xl min-w-[100px] hover:font-bold hover:bg-red-200"
        >
          Atras
        </button>
        <button
          onClick={nextListPokemon}
          className=" bg-gray-200 px-4 py-2 rounded-xl min-w-[100px] hover:font-bold hover:bg-red-200"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
export default Home;
