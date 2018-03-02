import React from 'react'
import { compose, withProps } from 'recompose'
import Header from '../components/header'
import Main from '../components/main'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Rewards = styled.div`
background: #fff;
height: 50px;
line-height: 50px;
font-size: 18px;
text-align: center;
color:black;
text-shadow: 0px 0.5px 0px rgba(0, 0, 0, 0.3);
padding: 0 20px;
box-shadow: 0px -1px 0px 0px #0000006b inset;
`

const enhance = compose(
  connect(state => ({ places: state.data.places })),
  withProps(({ places }) => ({
    places: Object.keys(places)
      .map(k => places[k])
  }))
)

const Component = ({ places }) => (
  <div>
    <Header nav>Find My Food</Header>
    <Main>
        {places.map((place, index) => (
          <Rewards key={index} >
            <div style={{ textAlign: 'left' }}>
              {place.name}
            </div>
          </Rewards>
        ))}
    </Main>
  </div>
)

const RewardsComponent = enhance(Component)

export default RewardsComponent
