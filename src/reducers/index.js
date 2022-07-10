import { combineReducers } from "redux";
import { listReducer, noteReducer } from "./noteReducer";
import { pokemonReducer } from "./pokemonReducer";

const rootReducer = combineReducers({
    list: listReducer,
    note: noteReducer,
    pokemon: pokemonReducer
})

export default rootReducer;