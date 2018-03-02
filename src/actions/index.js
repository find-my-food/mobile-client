import { bindActionCreators } from 'redux'

import * as data from './data'
import * as cart from './cart'

let actions = {
  ...data,
  ...cart
}

export default actions

export function bind(store) {
  Object.assign(actions, bindActionCreators(actions, store.dispatch))
}

