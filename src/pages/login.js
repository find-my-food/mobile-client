import React from 'react'
import Header from '../components/header'
import Main from '../components/main'
import GoogleLogin from '../assets/images/google-login.png'
import FacebookLogin from '../assets/images/facebook-login.png'
import { Image, Facebook } from 'react-feather';

export default () => (
  <div>
    <Header nav>Login</Header>
    <Main>
      <img src={GoogleLogin}
        style={{width: '100%', paddingTop: '50%'}}>
      </img>
      <img src={FacebookLogin}
        style={{width: '100%'}}>
      </img>
    </Main>
  </div>
)
