import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CardPokemon = ({ pokemon }) => {
  const [dataPoke, setDataPoke] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getPokemon = async () => {
    try {
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      if (!data) throw new Error("erro feching data :D");
      const res = await data.json();
      setDataPoke(res);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);
  
  //usando el use personalizado
  //cont {data,loading,error} =useFetch(url)
  if (loading) return <p>cargando-....</p>;
  if (error) return <p>no hay pokemon</p>;

  const types = dataPoke.types;
  const color = (col) => {
    if (col === "grass") return "border-green-900";
    if (col === "poison") return "border-blue-900";
    if (col === "fire") return "border-red-900";
    if (col === "water") return "border-blue-900";
    if (col === "bug") return "border-yellow-900";
    if (col === "normal") return "border-pink-900";
  };
  return (
    <div
      className={`bg-green-9001 border-2 ${color(
        types[0].type.name
      )}  rounded-xl m-1 p-4 flex flex-col gap-3 justify-center items-center text-gray-50 `}
    >
      <div className="">
        <img
          className="rounded-full bg-gradient-to-t from-[#958e95] to-black p-2"
          src={dataPoke.sprites.other.home.front_default}
          alt="foto de pokemon"
          height={150}
          width={150}
        />
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="text-xl font-bold first-letter:uppercase">{dataPoke.name} </h1>
        <section className="flex gap-5 ">
          <div className="text-center">
            <p className="text-gray-400">Height</p>
            <span className="font-bold">{`${dataPoke.height / 10}`} kg</span>
          </div>
          <div className="text-center">
            <p className="text-gray-400">Weight</p>
            <span className="font-bold">{`${dataPoke.weight / 10}`} m </span>
          </div>
        </section>
        <section className="flex  gap-2  justify-center items-center">
          <p>Type :</p>
          <div>
            {types.map((type) => (
              <span key={type.slot} className="">
                <p className="font-bold first-letter:uppercase">{type.type.name} </p>
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
export default CardPokemon;
