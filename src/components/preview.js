import React from 'react'
import { Link } from 'react-router-dom'
import { compose, withProps } from 'recompose'
import styled from 'styled-components'
import { BASE_COLOR } from '../vars'
import moment from 'moment'

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
`

const Description = styled.div`
  padding: 20px;
  margin: 0;
`

const Image = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  position: relative;
  section {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0px 20px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
  }
`

const OrderButton = styled(Link)`
  display: block;
  border-radius: 7px;
  border: 1px solid #ccc;
  background: white;
  width: 100%;
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 2em;
  text-align: center;
  &:link {
    color: black;
    text-decoration: none;
  }
  &:visited {
    color: black;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.02);
  }
  &:active {
    background: rgba(0, 0, 0, 0.1);
    border: 1px solid #aaa;
  }
  &:focus {
    outline: none;
  }
`

const enhance = compose()

const formatHour = hour => (hour > 12 ? hour - 12 + ' pm' : hour + 'am')

const Component = ({ id, name, image, price, description, place }) => (
  <Container>
    <Image style={{ backgroundImage: `url(${image})` }} />

    <Description>
      <OrderButton to={`/${id}/order`}>Order Now (${price})</OrderButton>
      <p>{description}</p>
      <br />
      <strong>Hours</strong>
      <p>
        {formatHour(place.hours[0])} - {formatHour(place.hours[1])}
      </p>
      <strong>Menu</strong>
      <p>...menu here...</p>
    </Description>
  </Container>
)

export default enhance(Component)
