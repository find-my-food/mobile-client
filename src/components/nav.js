import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
  &:active {
    background: rgba(0, 0, 0, 0.02);
  }
`

const Component = ({ style, close }) => (
  <Container style={style}>
    <Hero>Find My Food</Hero>
    <NavLink to="/cart" onClick={close}>
      Cart
    </NavLink>
    <NavLink to="/" onClick={close}>
      Billboard
    </NavLink>
    <NavLink to="/map" onClick={close}>
      Map
    </NavLink>
    <NavLink to="/login" onClick={close}>
      Login (temporary link)
    </NavLink>
  </Container>
)

export default Component
