import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { compose, withProps, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import actions from '../actions'

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
`

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  h2 {
    margin-top: 0;
    font-weight: 100;
  }
`

const OrderButton = styled.button`
  display: block;
  border-radius: 7px;
  border: 1px solid #ccc;
  background: white;
  width: 100%;
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 2em;
  text-align: center;
  &:link {
    color: black;
    text-decoration: none;
  }
  &:visited {
    color: black;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.02);
  }
  &:active {
    background: rgba(0, 0, 0, 0.1);
    border: 1px solid #aaa;
  }
  &:focus {
    outline: none;
  }
`

const enhance = compose(
  withRouter,
  withProps(({ match }) => match.params),
  connect(state => ({ data: state.data })),
  withProps(({ selectedId, data }) => ({
    place: {
      ...data.places[selectedId],
      deal: Object.keys(data.deals)
        .map(k => data.deals[k])
        .find(d => d.placeId === selectedId),
      menu: Object.keys(data.menuItems)
        .map(key => data.menuItems[key])
        .filter(x => x.placeId === selectedId)
    }
  })),
  withHandlers({
    order: ({ place, history }) => () => {
      history.push('/cart')
      actions.addToCart(place.deal.id)
    }
  })
)

const Component = ({ place, order }) => (
  <Overlay onClick={() => window.history.back()}>
    <Container onClick={e => e.stopPropagation()}>
      <h2>
        {place.deal.name} at {place.name}
      </h2>
      <OrderButton onClick={order}>Add to Cart</OrderButton>
    </Container>
  </Overlay>
)

const IndexComponent = enhance(Component)

export default IndexComponent
