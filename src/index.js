import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app'
import registerServiceWorker from './registerServiceWorker'
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
)

registerServiceWorker()
