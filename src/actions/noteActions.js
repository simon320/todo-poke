import {ADD_LIST, DELETE_LIST, ADD_NOTE, DELETE_NOTE, DELETE_NOTE_FOR_TITLE, COMPLETE_NOTE} from "../types/index"
import { v4 as uuidv4 } from 'uuid';


// LIST
export const addList = (newTitle) => ({
  type: ADD_LIST,
  payload: {
    id: uuidv4(),
    newTitle
  }
})

export const deleteList = (id) => ({
  type: DELETE_LIST,
  id
})



// NOTE
export const addNote = (title, input) => ({
  type: ADD_NOTE,
  payload: {
    id: uuidv4(),
    title,
    completed: false,
    input
  }
});

export const deleteNote = (id) => ({
  type: DELETE_NOTE,
  id
});

export const deleteNoteForTitle = (title) => ({
  type: DELETE_NOTE_FOR_TITLE,
  title
});

export const completeNote = (id) => ({
  type: COMPLETE_NOTE,
  id
});