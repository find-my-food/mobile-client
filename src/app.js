import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages'
import LoginPage from './pages/login'
import MapPage from './pages/map'
import DealPage from './pages/deal'
import OrderPage from './pages/order'

export default () => (
  <Switch>
    <Route path="/login">
      <LoginPage />
    </Route>
    <Route path="/map">
      <MapPage />
    </Route>
    <Route path="/">
      <HomePage>
        <Route path="/:selectedId">
          <DealPage>
            <Route path="/:selectedId/order" component={OrderPage} />
          </DealPage>
        </Route>
      </HomePage>
    </Route>
  </Switch>
)
