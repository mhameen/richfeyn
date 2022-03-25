import React from 'react';
import { createContext } from 'react';

import SplashScreen from '../screens/RootStack/SplashScreen';
import RootScreen from '../screens/RootStack/RootScreen';
import storage from './storage';
import Auth from './auth';

export const AuthContext = createContext();

// const actions = {
//   UPDATE_USER: 'UPDATE_USER',
//   UPDATE_TOKEN: 'UPDATE_TOKEN',
// };

// function reducer(state, action) {
//   console.log(action.type);
//   switch (action.type) {
//     case actions.UPDATE_USER:
//       return {...state, user: action.value};
//     case actions.UPDATE_TOKEN:
//       return {...state, token: action.value};
//     default:
//       return state;
//   }
// }

// const AppContextProvider = (props) => {
//   console.log('Start');

//   const initialState = {
//     user: {},
//     token:'',
//     // isLoggedIn: false
//   };

//   const [state, dispatch] = useReducer(reducer, initialState);
//   const [initializing, setInitializing] = useState(true);

//   const updateTokenContext = useCallback(async () =>{
//     let token;
//   })

//   const updateUserContext = useCallback(async () => {
//     let tempUser = {'name': 'monica'}

//     await dispatch({type: 'UPDATE_USER', value: tempUser});
//     return tempUser;
//   }, []);

//   const start = useCallback(async () => {
//     await updateUserContext();
//     return true;
//   }, [updateUserContext]);

//   useEffect(() => {
//     start().then(()=>setInitializing(false))
//   }, [setTimeout]);

//   const value = {
//     user: state.user,
//     token: state.token,
//     // updateTokenContext: updateTokenContext,
//     updateUserContext: updateUserContext,
//   };

//   // if (!initializing){
//   //   setTimeout(function(){ return <RootScreen/> }, 2000);
//   //   return <RootScreen/>
//   // }
//   return (
//     <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
//   );
// };

// export {AppContext, AppContextProvider};
