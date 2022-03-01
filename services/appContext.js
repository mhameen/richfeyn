import React from 'react';
import {useEffect, useReducer, useCallback} from 'react';
// import {getUser} from './getters';
// import firestore from '@react-native-firebase/firestore';
// import messaging from '@react-native-firebase/messaging';
// import {updateUser, updateUserLocation} from './setters';
const AppContext = React.createContext();
const actions = {
  UPDATE_USER: 'UPDATE_USER',
};

// async function saveTokenToDatabase(token) {
//   await updateUser({
//     tokens: firestore.FieldValue.arrayUnion(token),
//   });
// }

function reducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case actions.UPDATE_USER:
      return {...state, user: action.value};
    default:
      return state;
  }
}

const AppContextProvider = (props) => {
  // console.log('Start');
  const initialState = {
    user: {},
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const updateUserContext = useCallback(async () => {
    // let tempUser = await getUser();
    let tempUser = {'name': "monica"};
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
    updateUserContext: updateUserContext,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
export {AppContext, AppContextProvider};