import React from 'react'
import { Link } from 'react-router-dom'
import { compose, withProps } from 'recompose'
import styled from 'styled-components'
import { BASE_COLOR } from '../vars'

const Container = styled.li`
  display: block;
  margin: 5px;
  height: 200px;
  position: relative;
  background-size: 100%;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
  &:active {
    transform: scale(0.99);
  }
  section {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0px 20px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    .price {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      padding: 0px 20px;
    }
  }
`

const enhance = compose()

const Component = ({ id, name, image, price, place }) => (
  <Link to={`/${id}`}>
    <Container style={{ backgroundImage: `url(${image})` }}>
      <section>
        {name} at {place.name}
        <div className="price">${price}</div>
      </section>
    </Container>
  </Link>
)

export default enhance(Component)
