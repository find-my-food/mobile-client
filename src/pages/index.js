import React from 'react'
import { Link } from 'react-router-dom'
import { compose, lifecycle, withProps } from 'recompose'
import Header from '../components/header'
import Nav from '../components/nav'
import Main from '../components/main'
import List from '../components/list'
import Item from '../components/item'
import Preview from '../components/preview'
import state from '../state'

const enhance = compose(
  withProps(() => ({
    deals: Object.keys(state.deals)
      .map(k => state.deals[k])
      .map(deal => ({
        ...deal,
        place: state.places[deal.placeId]
      }))
  }))
)

const Component = ({ selectedId, deals, children }) => (
  <div>
    <Header><h2>Find My Food</h2></Header>
    <Main>
      <List>
        {deals.map((props, index) => (
          <Item key={index} id={index} {...props} />
        ))}
      </List>
    </Main>
    <Nav />
    {children}
  </div>
)

const IndexComponent = enhance(Component)

export default IndexComponent
