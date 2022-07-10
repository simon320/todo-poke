import {ADD_LIST, DELETE_LIST, ADD_NOTE, DELETE_NOTE, DELETE_NOTE_FOR_TITLE, COMPLETE_NOTE} from "../types/index"


const intialList = {list: []}

export const listReducer = (state = intialList, action) => {
    switch (action.type) {
        case ADD_LIST:
            return{
                ...state,
                list: [...state.list, action.payload]
            }
        case DELETE_LIST:
            const newList = state.list.filter((item)=> item.id !== action.id)

            return{
                ...state,
                list: newList
            }
        default:
            return state
    }

}

const initialNote = {note: []};

export const noteReducer = (state = initialNote, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return{
                ...state,
                note: [...state.note, action.payload]
            };


        case DELETE_NOTE:
            const newNote = state.note.filter((item)=> item.id !== action.id)

            return{
                ...state,
                note: newNote
            }

        case DELETE_NOTE_FOR_TITLE:
            const newNoteTitle = state.note.filter((item)=> item.title !== action.title)

            return{
                ...state,
                note: newNoteTitle
            }

        case COMPLETE_NOTE:
            let newCompletedNote = [];

            for (const item of state.note) {
                if(action.id == item.id){
                    item.completed = !item.completed;
                    newCompletedNote.push(item);
                } else {newCompletedNote.push(item)}
            }

            return{
                ...state,
                note: newCompletedNote
            }


        default:
            return state
    }
}
