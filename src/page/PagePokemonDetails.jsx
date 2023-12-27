import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const PagePokemonDetails = () => {
  const params = useParams();
  // const [dataPoke, setDataPoke] = useState([]);
  // const getPokemon = async () => {
  //   const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
  //   const res = await data.json();
  //   setDataPoke(res);
  // };

  // useEffect(() => {
  //   getPokemon();
  // }, [dataPoke]);

  //usando el hook personalizado
  const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`;
  const { data, loading, error } = useFetch(url);
  if (loading) return <>cargando-....</>;
  if (error) return <>no hay pokemon</>;
  return (
    <>
      <div>
        <h1>{data.name}</h1>
        <img src={data.sprites.back_default} alt="" />
      </div>
    </>
  );
};
export default PagePokemonDetails;
