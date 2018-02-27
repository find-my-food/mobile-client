import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app'
import registerServiceWorker from './registerServiceWorker'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
