import { GetStaticProps, NextPage } from 'next';
import {useEffect, useState} from "react"
import { GetResults, Pokemon } from '../types';
import ImageMain from "../components/ImageMain/ImageMain";
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar/SearchBar';
import Content from '../components/Content/Content';

const Home: NextPage<{pokemons:Pokemon[]}> = ({pokemons}) => {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState<Pokemon[]>([]);

  useEffect(()=>{
    const results = pokemons.filter((result)=> result.name.toLowerCase().includes(searchTerm))
    setSearchResult(searchTerm ? results : [])
  },[searchTerm])
  
  return(
    <Layout title="PokeDex">
      <ImageMain src="/main.png" alt="Image Main" />
      <SearchBar placeholder='Type to search ...'  setSearchTerm={setSearchTerm} searchResult={searchResult}/>
      <Content pokemons={pokemons} searchResult={searchResult}/>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps= async() => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=898&offset=0');
  const { results }: GetResults = await res.json();
  const pokemons = results.map((pokemon, index) => {
      const paddedId = ('00' + (index + 1)).slice(-3);
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
      return { ...pokemon, image };
  });
  return {
      props: { pokemons },
  };
}

export default Home;
