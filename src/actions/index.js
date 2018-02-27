import { bindActionCreators } from 'redux'

import * as data from './data'

let actions = {
  ...data
}

export default actions

export function bind(store) {
  Object.assign(actions, bindActionCreators(actions, store.dispatch))
}
