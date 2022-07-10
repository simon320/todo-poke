import React from 'react'
import { ArrowButtonDown, ArrowButtonRight, ArrowButtonLeft, ArrowButtonUp, BaseButton } from './ArrowButtonsStyles'
import { useDispatch } from 'react-redux';
import { fetchPokemon } from '../../../actions/pokemonActions';

const ArrowsButtons = ({ id, rotatePokemon, setRotatePokemon }) => {
    const dispatch = useDispatch();

    const handleClick = (e, arrow) => {
        let pokemonId = id + arrow
        dispatch(fetchPokemon(e, String(pokemonId)))
    }

    const handleRotate = () => {
        setRotatePokemon(!rotatePokemon)
    }

  return (
    <>
        <ArrowButtonUp onClick={()=> handleRotate() }></ArrowButtonUp>
        <ArrowButtonLeft onClick={(e)=> handleClick(e, -1) }></ArrowButtonLeft>
        <ArrowButtonRight onClick={(e)=> handleClick(e, 1) }></ArrowButtonRight>
        <ArrowButtonDown onClick={()=> handleRotate() }></ArrowButtonDown>
        <BaseButton/>
    </>
  )
}

export default ArrowsButtons