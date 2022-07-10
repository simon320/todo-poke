import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MdDelete } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';
import { AiOutlineReload } from 'react-icons/ai';
import { ListContext } from '../../context/todoListContext';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonStyled, DivStyles, DivContainerListStyled, DivContainerNoteStyled, ParagraphStyled } from './ListCurrentStyles';
import { completeNote, deleteNote } from '../../actions/noteActions';



const ListCurrent = () => {
  const { note } = useSelector(state => state.note)
  const dispatch = useDispatch();

  const { title } = useContext(ListContext);

  const handleDelete = (note) => {
      dispatch(deleteNote(note.id))
  }

  const handleCompleted = (note) => {
      dispatch(completeNote(note.id))
  }


  return (
    <DivContainerListStyled>
      {note?.map((note) => {
        return (
          note.title == title && (
            <DivContainerNoteStyled key={uuidv4()}>
              <DivStyles>
                <ButtonStyled onClick={() => handleCompleted(note)}>
                  {note.completed ? (
                    <AiOutlineReload></AiOutlineReload>
                  ) : (
                    <FaCheck></FaCheck>
                  )}
                </ButtonStyled>

                <ParagraphStyled completed={note.completed}>
                  {note.input}
                </ParagraphStyled>
              </DivStyles>
              <ButtonStyled deleted onClick={() => handleDelete(note)}>
                <MdDelete></MdDelete>
              </ButtonStyled>
            </DivContainerNoteStyled>
          )
        );
      })}
    </DivContainerListStyled>
  );
}

export default ListCurrent
