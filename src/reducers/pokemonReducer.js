import { IS_FETCHING, SUCCESS, ERROR } from "../types";

export const initialState = {
    data: null,
    isLoading: false,
    error: false
}

export const pokemonReducer = (state = initialState, action) => {
    switch (action.type){
        case IS_FETCHING:
            return{
                isLoading: true,
                error: false,
                data: null
            }
        case SUCCESS:
            return{
                ...state,
                isLoading: false,
                error: false,
                data: action.payload
            }
        case ERROR:
            return{
                ...state,
                isLoading: false,
                error: "ERROR! POKEMON NOT FOUND",
            }
        default:
            return state
    }
}