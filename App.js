import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Navigator from './src/navigator'; //imports the StackNavigator from nvigator.js
import filmsReducer from './src/store/films' //imports the reducer file

const reducers = combineReducers({   //redux component allows to combine multiple reducers, allows to take different parts of the state and puts them into a store under different key names e.g. films key with number of film titles
  films: filmsReducer
});

const middleware = applyMiddleware(thunk);

const store = createStore(reducers, middleware);

//wrap the app in provider to inform the different parts of the app of the store
const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);
export default App;
