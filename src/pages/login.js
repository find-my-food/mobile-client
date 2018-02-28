import React from 'react'
import Header from '../components/header'
import Main from '../components/main'
import GoogleLogin from '../assets/images/google-login.png'
import FacebookLogin from '../assets/images/facebook-login.png'
import { Image } from 'react-feather';

export default () => (
  <div>
    <Header nav>Login</Header>
    <Main>
      <img src={GoogleLogin}></img>
    </Main>
  </div>
)
