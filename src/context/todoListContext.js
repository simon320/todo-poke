import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


export const ListContext = createContext();

export const ListProvider = ({ children }) => {
    const [state, setState] = useLocalStorage('state', [])
    const [listTitle, setListTitle] = useLocalStorage('listTitle', []);
    const [title, setTitle] = useLocalStorage('title', "");

    return (
        <ListContext.Provider value={{ 
            state, setState,
            listTitle, setListTitle, 
            title, setTitle
        }}>
            {children}
        </ListContext.Provider>
    )
};