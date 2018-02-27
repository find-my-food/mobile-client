import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link, withRouter } from 'react-router-dom'
import { compose, lifecycle, withProps } from 'recompose'
import { ChevronLeft } from 'react-feather'
import Header from '../components/header'
import Nav from '../components/nav'
import Main from '../components/main'
import List from '../components/list'
import Item from '../components/item'
import state from '../state'

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
  height: 50%;
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
  withProps(({ deals, selectedId }) => ({
    deal: {
      ...state.deals[selectedId],
      place: state.places[state.deals[selectedId].placeId]
    }
  }))
)

const Component = ({ selectedId, deals, deal, children }) => (
  <Overlay onClick={() => window.history.back()}>
    <Container onClick={e => e.stopPropagation()}>
      <h2>
        {deal.name} at {deal.place.name}
      </h2>
      <OrderButton>Confirm Order</OrderButton>
    </Container>
  </Overlay>
)

const IndexComponent = enhance(Component)

export default IndexComponent
