import React from 'react'
import { compose, withProps } from 'recompose'
import Header from '../components/header'
import Main from '../components/main'
import List from '../components/list'
import Item from '../components/item'
import { connect } from 'react-redux'

const enhance = compose(
  connect(state => ({ data: state.data })),
  withProps(({ data }) => ({
    deals: Object.keys(data.deals)
      .map(k => data.deals[k])
      .map(deal => ({
        ...deal,
        place: data.places[deal.placeId]
      }))
  }))
)

const Component = ({ deals, children }) => (
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
