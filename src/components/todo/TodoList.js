import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion'
import { FaPlus } from 'react-icons/fa';
import { ListContext } from '../../context/todoListContext';
import ListCurrent from './ListCurrent';
import { ButtonStyled } from './ListCurrentStyles';
import { DivTodoStyled, InputTodoStyled } from './TodoListStyles'
import { useDispatch } from 'react-redux';
import { addList, addNote } from '../../actions/noteActions'


const TodoList = () => {
  const dispatch = useDispatch();
  const { title } = useContext(ListContext);
  const [input, setInput] = useState("");

  const handleAdd = (e) => {
    e.preventDefault()
    
    if (input !== "") {
      dispatch(addNote(title, input))
      setInput("");
    }
  };

  return (
    <DivTodoStyled onSubmit={(e) => handleAdd(e)}>
    
      <motion.div 
        className='container-div'
        initial={{opacity: 0}}
        animate={{
          opacity: [0, 1]
        }}
        transition={{
          duration: 1,
          delay: 0.5
        }}
      >
          <InputTodoStyled 
              type="text" 
              value={input} 
              onChange={(e)=> setInput(e.target.value)}
              placeholder="Debo recordar que..."
          />
          <ButtonStyled type='submit'>
              <FaPlus />
          </ButtonStyled>
      </motion.div>

      <ListCurrent />

    </DivTodoStyled>
  )
}

export default TodoList