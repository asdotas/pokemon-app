import { useEffect, useState } from 'react';
import './App.css';
import { getAllPokemon , getPokemon } from './utils/pokemon';

const App = () => {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      //全てのポケモンデータを取得
      let res = await getAllPokemon(initialURL);
      //各ポケモンの詳細なデータを取得
      loadPokemon(res.results);
      //console.log(res.results[0].url);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);//1回だけ呼び出す場合は空の配列を指定する

  const loadPokemon = async(data) => {
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url);

        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  console.log(pokemonData);


  return <div className="App">
    {loading ? (
      <h1>ロード中・・・</h1>
    ) : <>
    <h1>ポケモンデータを取得しました</h1>
    </>}
  </div>
}

export default App;