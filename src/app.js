import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages'
import DealPage from './pages/deal'

export default () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/:selectedId" component={DealPage} />
  </Switch>
)
