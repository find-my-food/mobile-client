import { createStore } from 'redux'
import reducers from './reducers'
import { bind } from './actions'

const store = createStore(reducers)
bind(store)

export default store
