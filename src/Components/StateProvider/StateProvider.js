// setup data layer
// we need this to track the basket

import React, { createContext, useContext, userContext, useReducer } from "react";
export const StateContext = createContext();
export const StateProvider = ({reducer,initialState,children}) =>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
) 


export const useStateValue=()=> useContext(StateContext)

// THIS IS HOW WE USE IT INSIDE OF A COMPONENT