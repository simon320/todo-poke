import React, { useState } from 'react'
import { Button, ContainerInputStyled, Input } from '../PokeApiStyles';
import { BsSearch } from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { fetchPokemon } from '../../../actions/pokemonActions';


const Search = () => {
    const dispatch = useDispatch()
    const [pokemon, setPokemon] = useState("");

  return (
    <ContainerInputStyled onSubmit={(e) => {
        dispatch(fetchPokemon(e, pokemon))
        setPokemon("");
      }}>
        <Input 
          value={pokemon}
          placeholder="find pokemon"
          onChange={(e) => setPokemon(e.target.value)}
        />
        <Button  type='submit'><BsSearch /></Button>
      </ContainerInputStyled>
  )
}

export default Search