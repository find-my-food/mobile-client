import React from 'react'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { ShoppingCart, Square, MapPin, LogIn, Box } from 'react-feather'
import { BASE_COLOR } from '../vars'

const Container = styled.div`
  background: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 70%;
  z-index: 10000;
  transform: translateX(-110%);
  transition-duration: 0.2s;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
`

const Hero = styled.div`
  height: 150px;
  background: rgba(0, 0, 0, 0.02);
  border-bottom: 1px solid #eee;
  padding: 20px;
  margin-bottom: 4px;
`

const NavLink = styled(Link)`
  display: block;
  color: #333;
  line-height: 40px;
  padding: 0 20px;
  text-decoration: none;
  svg {
    margin-right: 10px;
    position: relative;
    top: 1px;
  }
  &:active {
    background: rgba(0, 0, 0, 0.02);
  }
  &.active {
    border-right: 4px solid ${BASE_COLOR};
    background: rgba(0, 0, 0, 0.035);
    color: ${BASE_COLOR};
  }
`

const Component = ({ style, close }) => (
  <Container style={style}>
    <Hero>Find My Food</Hero>
    <NavLink activeClassName="active" to="/cart" onClick={close}>
      <ShoppingCart size={14} /> Cart
    </NavLink>
    <NavLink activeClassName="active" exact to="/" onClick={close}>
      <Square size={14} /> Billboard
    </NavLink>
    <NavLink activeClassName="active" to="/map" onClick={close}>
      <MapPin size={14} /> Map
    </NavLink>
    <NavLink activeClassName="active" to="/login" onClick={close}>
      <LogIn size={14} />Log in (temporary link)
    </NavLink>
    <NavLink activeClassName="active" to="/rewards" onClick={close}>
      <Box size={14} />Rewards
    </NavLink>
  </Container>
)

export default Component
