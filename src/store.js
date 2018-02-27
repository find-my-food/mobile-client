import { createStore, combineReducers } from 'redux'
import initialState from './state'

function data(state = initialState, action) {
  return state
}

const store = createStore(combineReducers({ data }))

export default store
