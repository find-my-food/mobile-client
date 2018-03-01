import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages'
import LoginPage from './pages/login'
import CartPage from './pages/cart'
import MapPage from './pages/map'
import ProfilePage from './pages/profile'
import OrderPage from './pages/order'
import RewardsPage from './pages/rewards'

export default () => (
  <Switch>
    <Route path="/login">
      <LoginPage />
    </Route>
    <Route path="/map">
      <MapPage />
    </Route>
    <Route path="/cart">
      <CartPage>
        <Route path="/:selectedId/order" component={OrderPage} />
      </CartPage>
    </Route>
    <Route path="/rewards">
      <RewardsPage />
    </Route>
    <Route path="/">
      <HomePage>
        <Route path="/:selectedId">
          <ProfilePage />
        </Route>
      </HomePage>
    </Route>
  </Switch>
)
