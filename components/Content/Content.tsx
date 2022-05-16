import React, {useState, useEffect} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Grid from '../Grid/Grid';
import Thumb from '../Thumb/Thumb';
import { Pokemon } from '../../types';

function Content({pokemons, searchResult}:{pokemons:Pokemon[], searchResult:Pokemon[]}) {
  const [data, setData] = useState(pokemons.slice(0,25))
  const [hasMore, setHasMore] = useState(true)

  useEffect(()=>{
    searchResult.length? setData(searchResult.slice(0, 25)) : setData(pokemons.slice(0, 25))
  },[searchResult])

  const getMorePokemons = () => {
    let newPokemons:Pokemon[]
    if (searchResult.length){
      newPokemons = searchResult.slice(data.length, data.length + 25)
      setData((prevPokemons) => [...prevPokemons, ...newPokemons]);
    }else{
      newPokemons = pokemons.slice(data.length, data.length + 25)
      setData((prevPokemons) => [...prevPokemons, ...newPokemons]);
    }
  };

  useEffect(()=>{
    setHasMore(data.length > 875 ? false : true)
  },[data])

  return (
    <InfiniteScroll
        style={{overflow:"visible"}}
        dataLength={data.length}
        next={getMorePokemons}
        hasMore={hasMore}
        loader
      >
        <Grid>
            {data.map((pokemon, index)=>(
              <Thumb 
                key={index}
                image={pokemon.image}
                name={pokemon.name}
              />))
            }
        </Grid>
      </InfiniteScroll>
  )
}

export default Content