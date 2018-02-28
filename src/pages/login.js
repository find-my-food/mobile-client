import React from 'react'
import Header from '../components/header'
import Main from '../components/main'
import GoogleLogin from '../assets/images/google-login.png'
import FacebookLogin from '../assets/images/facebook-login.png'

export default () => (
  <div>
    <Header nav>Login</Header>
    <Main>
      <img
        alt=""
        src={GoogleLogin}
        style={{ width: '100%', paddingTop: '50%' }}
      />
      <img alt="" src={FacebookLogin} style={{ width: '100%' }} />
    </Main>
  </div>
)
