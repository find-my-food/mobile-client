import React from 'react'
import { Link } from 'react-router-dom'
import { compose, lifecycle, withProps } from 'recompose'
import Header from '../components/header'
import Main from '../components/main'
import List from '../components/list'
import Item from '../components/item'
import Preview from '../components/preview'
import state from '../state'

const enhance = compose(
  withProps(() => ({
    deals: state.deals.map(deal => ({
      ...deal,
      place: state.places[deal.placeId]
    }))
  }))
)

const Component = ({ selectedId, deals }) => (
  <div>
    <Header>
      {selectedId !== undefined && (
        <Link to="/">
          <div className="back">Back</div>
        </Link>
      )}
      Find My Food
    </Header>
    <Main>
      {selectedId !== undefined ? (
        <Preview id={selectedId} {...deals[selectedId]} />
      ) : (
        <List>
          {deals.map((props, index) => (
            <Item key={index} id={index} {...props} />
          ))}
        </List>
      )}
    </Main>
  </div>
)

const IndexComponent = enhance(Component)
IndexComponent.getInitialProps = ({ query }) => {
  return {
    selectedId: query.id
  }
}

export default IndexComponent
