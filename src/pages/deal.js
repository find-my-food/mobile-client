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
import Preview from '../components/preview'
import state from '../state'

const ContainerInAnim = keyframes`
  from {
    transform: translateY(100px);
    opacity: .8;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const Container = styled.div`
  animation: ${ContainerInAnim} 0.15s;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const Back = styled(Link)`
  display: block;
  color: white;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 44px;
  padding: 0px 20px;
  z-index: 1000;
  line-height: 44px;
  &:link {
    text-decoration: none;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const Description = styled.div`
  padding: 20px;
  margin: 0;
`

const Image = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  position: relative;
  section {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0px 20px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
  }
`

const OrderButton = styled(Link)`
  display: block;
  border-radius: 7px;
  border: 1px solid #ccc;
  background: white;
  width: 100%;
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 2em;
  text-align: center;
  transition-duration: 0.2s;
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
    transition-duration: 0s;
    background: rgba(0, 0, 0, 0.1);
    border: 1px solid #aaa;
  }
  &:focus {
    outline: none;
  }
`

const MenuTable = styled.table`
  width: 100%;
  border-spacing: 0;
  border: 1px solid #ccc;
  background: white;
  margin-top: 10px;
  td {
    padding: 10px;
    &:first-child {
      border-right: 1px solid #ccc;
    }
  }
  tr {
    &:not(:last-child) td {
      border-bottom: 1px solid #ccc;
    }
  }
`

const enhance = compose(
  withRouter,
  withProps(({ match }) => match.params),
  withProps(({ deals, selectedId }) => ({
    deal: {
      ...state.deals[selectedId],
      place: state.places[state.deals[selectedId].placeId],
      menu: Object.keys(state.menuItems)
        .map(key => state.menuItems[key])
        .filter(x => x.placeId === state.deals[selectedId].placeId)
    }
  }))
)

const formatHour = hour => (hour > 12 ? hour - 12 + ' pm' : hour + 'am')

const Component = ({ selectedId, deal, children }) => (
  <Container>
    <Header style={{ zIndex: 1000, background: 'rgba(0,0,0,.8)' }}>
      <Back to="/">
        <ChevronLeft />
      </Back>
      {deal.place.name}
    </Header>
    <Main style={{ top: 0, bottom: 0 }}>
      <Image style={{ backgroundImage: `url(${deal.image})` }} />

      <Description>
        <OrderButton to={`/${deal.id}/order`}>
          Order {deal.name} (${deal.price})
        </OrderButton>
        <p>{deal.description}</p>
        <br />
        <strong>Hours</strong>
        <p>
          {formatHour(deal.place.hours[0])} - {formatHour(deal.place.hours[1])}
        </p>
        <strong>Menu</strong>
        <MenuTable>
          <tbody>
            {deal.menu.map(({ id, name, price }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>${price}</td>
              </tr>
            ))}
          </tbody>
        </MenuTable>
      </Description>
    </Main>
    {children}
  </Container>
)

const IndexComponent = enhance(Component)

export default IndexComponent
