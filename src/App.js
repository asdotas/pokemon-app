import { useEffect, useState } from 'react';
import './App.css';
import { getAllPokemon } from './utils/pokemon';

const App = () => {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      let res = await getAllPokemon(initialURL);
      console.log(res);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);//1回だけ呼び出す場合は空の配列を指定する

  return <div className="App">
    {loading ? (
      <h1>ロード中・・・</h1>
    ) : <>
    <h1>ポケモンデータを取得しました</h1>
    </>}
  </div>
}

export default App;