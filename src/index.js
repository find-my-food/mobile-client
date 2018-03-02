import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app'
import registerServiceWorker from './registerServiceWorker'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()

// Make the phone always fit on the screen
const padding = 25
const phone = document.querySelector('.phone')
document.body.style.setProperty(
  '--scale',
  Math.min(1, (window.innerHeight - padding * 2) / phone.clientHeight)
)
