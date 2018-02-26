import React from 'react'
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom'
import { compose, lifecycle, withProps } from 'recompose'
import Header from '../components/header'
import Nav from '../components/nav'
import Main from '../components/main'
import List from '../components/list'
import Item from '../components/item'
import Preview from '../components/preview'
import state from '../state'

const Back = styled(Link)`
  color: white;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  padding: 0px 20px;
  &:link {
    text-decoration: none;
  }
  &:active {
    background: rgba(0, 0, 0, 0.1);
  }
`

const enhance = compose(
  withRouter,
  withProps(({ match }) => match.params),
  withProps(() => ({
    deals: Object.keys(state.deals)
      .map(k => state.deals[k])
      .map(deal => ({
        ...deal,
        place: state.places[deal.placeId]
      }))
  }))
)

const Component = ({ selectedId, deals }) => (
  <div>
    <Header>
      <Back to="/">Back</Back>
      Find My Food
    </Header>
    <Main>
      <Preview id={selectedId} {...deals[selectedId]} />
    </Main>
    <Nav />
  </div>
)

const IndexComponent = enhance(Component)

export default IndexComponent
