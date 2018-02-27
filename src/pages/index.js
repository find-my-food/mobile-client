import React from 'react'
import { Link } from 'react-router-dom'
import { compose, lifecycle, withProps } from 'recompose'
import Header from '../components/header'
import Nav from '../components/nav'
import Main from '../components/main'
import List from '../components/list'
import Item from '../components/item'
import { connect } from 'react-redux'

const enhance = compose(
  connect(state => ({ data: state.data })),
  withProps(({data}) => ({
    deals: Object.keys(data.deals)
      .map(k => data.deals[k])
      .map(deal => ({
        ...deal,
        place: data.places[deal.placeId]
      }))
  }))
)

const Component = ({ selectedId, deals, children }) => (
  <div>
    <Header nav>Find My Food</Header>
    <Main>
      <List>
        {deals.map((props, index) => (
          <Item key={index} id={index} {...props} />
        ))}
      </List>
    </Main>
    {children}
  </div>
)

const IndexComponent = enhance(Component)

export default IndexComponent
