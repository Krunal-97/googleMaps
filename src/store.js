import { configureStore } from '@reduxjs/toolkit'
import reducers from './reducers/index';
import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger'

console.log("reducers", reducers, typeof reducers)
const state = { lat: 0, long: 0 }
// const store = configureStore({
//     reducers,
//     state,
// })
const store = configureStore({
    reducer: reducers,
    initialState: {}
})

export default store;