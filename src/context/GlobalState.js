// Where we are going to create the context
import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer';


// Initial State

const initialState = {
    transactions: []
}
// Create Context
export const GlobalContext = createContext(initialState);

// Provider Components (wraps the App)
export const GlobalProvider = ({children}) =>{
    const [state,dispatch] = useReducer(AppReducer,initialState);
    
    // Actions (Calls to the reducer)
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return(<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
        </GlobalContext.Provider>);
}