import React, { useState } from 'react';
import { PokePageStyled } from './PokeApiStyles';
import Pokedex from './components/Pokedex';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import misnotas from '../../assets/img/icon72.png'
import { useSelector } from 'react-redux';


const PokeAPI = () => {

  const { data, isLoading, error } = useSelector(state => state.pokemon);
  const [rotatePokemon, setRotatePokemon] = useState(false);
  return (
    <PokePageStyled>

    <Link to={"/"}><img style={{ margin: '2rem 0 0 2rem'}} src={misnotas} alt="" /></Link>

      <div
        style={{
          background: "#ff8833",
          height: "95vh",
          boxShadow: "0px 4px 3px inset #000, 0px -4px 3px inset #000",
          padding: "3rem 0",
          borderTop: "3rem solid #333",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.div
          animate={{
            x: [2000, 0, 0],
            rotateY: [0, 34, 0],
          }}
        >
          <Pokedex
            isLoading={isLoading}
            error={error}
            rotatePokemon={rotatePokemon}
            setRotatePokemon={setRotatePokemon}
            {...data}
          />
        </motion.div>
      </div>
    </PokePageStyled>
  );
}

export default PokeAPI