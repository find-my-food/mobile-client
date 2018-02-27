import { createStore } from 'redux'
import initialState from './state'
import reducers from './reducers'
import { bind } from './actions'

const store = createStore(reducers)
bind(store)

export default store
