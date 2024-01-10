import { createContext } from 'react';

const AppContext = createContext(
    {
        state1:[],
        setState1:(data)=>{},
        state2:[]
    }
);

export default AppContext;