import React from 'react'
import Header from '../components/header'
import Main from '../components/main'
import Check from '../components/check'

export default () => (
  <div>
    <Header nav>Rewards</Header>
    <Main>
      <p style={{ fontSize: '2em', width: '100%', top: '50%', display: 'flex', justifyContent: 'center' }}>Click for a reward!</p>
    </Main>
    <Check />
  </div>
)
