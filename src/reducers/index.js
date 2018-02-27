import { combineReducers } from 'redux'
import * as data from './data'

const reducers = { data }

const transformed = Object.keys(reducers)
  .map(reducerKey => ({
    key: reducerKey,
    item: (state, action) =>
      !state
        ? reducers[reducerKey].initialState
        : typeof reducers[reducerKey][action.type] === 'function'
          ? reducers[reducerKey][action.type](state, action.payload)
          : state
  }))
  .reduce((obj, { key, item }) => Object.assign(obj, { [key]: item }), {})

export default combineReducers(transformed)
