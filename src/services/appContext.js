import React from 'react';
import {useEffect, useReducer, useCallback} from 'react';
import Auth from './auth'
const AppContext = React.createContext();


const actions = {
  UPDATE_USER: 'UPDATE_USER',
  UPDATE_TOKEN: 'UPDATE_TOKEN',
};


function reducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case actions.UPDATE_USER:
      return {...state, user: action.value};
    case actions.UPDATE_TOKEN:
      return {...state, token: action.value};
    default:
      return state;
  }
}

const AppContextProvider = (props) => {
  console.log('Start');

  const initialState = {
    user: {},
    token:'',
    isLoggedIn: False
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const updateTokenContext = useCallback(async () =>{
    let token;
  })

  const updateUserContext = useCallback(async () => {
    // let tempUser = await getUser();
    let data = await Auth()
    user = data.user
    token = data.token
    
    await dispatch({type: 'UPDATE_USER', value: tempUser});
    return tempUser;
  }, []);

  const start = useCallback(async () => {
    await updateUserContext();
    return true;
  }, [updateUserContext]);



  useEffect(() => {
    start()
  }, [start]);



  const value = {
    user: state.user,
    token: state.token,
    updateTokenContext: updateTokenContext,
    updateUserContext: updateUserContext,
  };


  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};


export {AppContext, AppContextProvider};