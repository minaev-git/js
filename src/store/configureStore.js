/**
 * Created by Никита on 11.05.2017.
 */
import { createStore, applyMidddleware } from 'redux';
import rootReducer from '../reducers/index';

export default function configureStore(initialState) {
  const store = createStore(rootReducer,initialState);
  return store;
}