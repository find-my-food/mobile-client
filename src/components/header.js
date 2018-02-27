import React from 'react'
import styled from 'styled-components'
import { Menu as MenuIcon } from 'react-feather'
import Nav from './nav'
import { BASE_COLOR } from '../vars'

const Container = styled.div`
  background: ${BASE_COLOR};
  height: 44px;
  line-height: 44px;
  font-size: 24px;
  text-align: center;
  color: rgba(255, 255, 255, 0.95);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 0px;
  box-shadow: 0px -1px 0px 0px #0000006b inset;
  backdrop-filter: blur(6px);
`

const Menu = styled.div`
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

export default ({ children, style, nav }) => (
  <Container style={style}>
    {nav && (
      <Menu>
        <MenuIcon />
      </Menu>
    )}
    {children}
    <Nav />
  </Container>
)
