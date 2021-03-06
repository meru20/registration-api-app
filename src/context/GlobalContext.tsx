import React, { createContext, useState, useReducer } from 'react';
import instance from '../api/apiConfig';


const initialState = {
    users: [],
    user: undefined,
    postUsers: () => {},
    getUsers: () =>  {},
    alert: false,
}
const appReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'GET_USERS':
            return { ...state, users: action.payload};
        case 'POST_USER':
            return { ...state, users: action.payload,alert: false}  
        case 'ALERT':
                return {...state, alert: action.payload}
        default:
            return state;      
    }
}

export const GlobalContext = createContext<InitialStateType>(initialState);

export const GlobalProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);
    const getUsers = async () => {
        try {
            let response = await instance.get('/user');
            console.log('data ', response)
            dispatch({ type: 'GET_USERS', payload: response });
          } catch (e) {
            console.log(e);
          }
    }
    const postUsers = async (register: User) =>{
        dispatch({type: 'AlERT',payload: true})
        console.log(register);
        try {
            let { data } = await instance.post('/user',register);
            dispatch({ type: 'POST_USERS', payload: data });
          } catch (e) {
            console.log(e);
          }
    }
    return (
        <GlobalContext.Provider
          value={{
            users: state.users,
            user: state.user,
            postUsers,
             getUsers,
             alert:state.alert,
            }}>
          {children} {/* <AppRouter/> */}
        </GlobalContext.Provider>
      );
}