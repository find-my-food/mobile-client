import React from 'react'
import Header from '../components/header'
import Main from '../components/main'
import GoogleLogin from '../assets/images/google-login.png'
import FacebookLogin from '../assets/images/facebook-login.png'
import Logo from '../assets/images/logo.png'

export default () => (
  <div>
    <Header nav>Login</Header>
    <Main>
      <img alt="logo" src={Logo} style={{ width: '100%', paddingTop: '25%' }} />
      <img
        alt=""
        src={GoogleLogin}
        style={{ width: '100%', paddingTop: '50%' }}
      />
      <img alt="" src={FacebookLogin} style={{ width: '100%' }} />
    </Main>
  </div>
)
