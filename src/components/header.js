import React from 'react'
import styled from 'styled-components'
import { Menu as MenuIcon } from 'react-feather'
import Nav from './nav'
import { BASE_COLOR } from '../vars'
import { compose, withStateHandlers } from 'recompose'

const Container = styled.div`
  background: ${BASE_COLOR};
  height: 44px;
  line-height: 44px;
  font-size: 18px;
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

const Menu = styled.button`
  background: transparent;
  border: 0px;
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
  &:active {
    background: rgba(0, 0, 0, 0.1);
  }
  &:focus {
    outline: none;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.1);
`

const enhancer = compose(
  withStateHandlers(
    { showingMenu: false },
    {
      showMenu: () => () => ({ showingMenu: true }),
      hideMenu: () => () => ({ showingMenu: false })
    }
  )
)

const Component = ({
  children,
  style,
  nav,
  showMenu,
  hideMenu,
  showingMenu
}) => (
  <div>
    <Container style={style}>
      {nav && (
        <Menu onClick={showMenu}>
          <MenuIcon />
        </Menu>
      )}
      {children}
    </Container>
    {showingMenu && <Overlay onClick={hideMenu} />}
    <Nav
      close={hideMenu}
      style={{ transform: `translateX(${showingMenu ? '0' : '-110%'})` }}
    />
  </div>
)

export default enhancer(Component)