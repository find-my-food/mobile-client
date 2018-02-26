import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages'
import DealPage from './pages/deal'
import OrderPage from './pages/order'

export default () => (
  <HomePage>
    <Route path="/:selectedId">
      <DealPage>
        <Route path="/:selectedId/order" component={OrderPage} />
      </DealPage>
    </Route>
  </HomePage>
)
