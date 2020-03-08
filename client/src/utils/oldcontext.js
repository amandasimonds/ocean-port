// import React, { createContext, useReducer, useContext } from "react";
// import {
//   LOGIN,
//   LOADING,
//   SIGNUP,
//   ADD_FAVORITE,
//   ADD_BADGE,
//   ADD_SCORE,
//   UPDATE_FAVORITES,
//   REMOVE_FAVORITE
// } from "./actions";

// const StoreContext = createContext();
// const { Provider } = StoreContext;

// const

// const reducer = (state, action) => {
//   switch (action.type) {
//   case LOGIN:
//       return {
//           ...state,
//           loggedIn: true,
//       };

//       case SIGNUP:
//           return {
//               ...state,
//               loggedIn:true,
//           }

//   case ADD_FAVORITE:
//     return {
//       ...state,
//       favorites: [action.post, ...state.favorites],
//       loading: false
//     };

//   case UPDATE_FAVORITES:
//     return {
//       ...state,
//       favorites: [...state.favorites],
//       loading: false
//     };

//   case REMOVE_FAVORITE:
//     return {
//       ...state,
//       favorites: state.favorites.filter((post) => {
//         return post._id !== action._id; 
//       })
//     };

//     case ADD_BADGE:
//       return {
//         ...state,
//         badges: [action.post, ...state.favorites],
//         loading: false
//       };

//   case LOADING:
//     return {
//       ...state,
//       loading: true
//     };

//   default:
//     return state;
//   }
// };

// const StoreProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] = useReducer(reducer, {
//     user: {
//       _id: 0,
//       email: "",
//       password: "",
//       loggedIn: false
//     },
//     favorites: [],
//     badges:[],
//     scores:[],
//     loading: false
//   });

//   return <Provider value={[state, dispatch]} {...props} />;
// };

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

// export { StoreProvider, useStoreContext };
