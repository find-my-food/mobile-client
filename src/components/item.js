import React from 'react'
import { Link } from 'react-router-dom'
import { compose, withProps } from 'recompose'
import styled from 'styled-components'
import { BASE_COLOR } from '../vars'
import { ThumbsUp, ThumbsDown } from 'react-feather'

const Container = styled.li`
  display: block;
  margin: 0;
  height: 300px;
  position: relative;
  background-size: cover;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
  &:active {
    transform: scale(0.99);
  }
  section {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80px;
    padding: 0px 20px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding-top: 10px;
    .price {
      position: absolute;
      right: 0;
      top: 10px;
      display: flex;
      align-items: center;
      padding: 0px 20px;
    }
  }
`

const VoteControls = styled.div`
  margin-top: 6px;
  padding-right: 10px;
  float: left;
  text-align: center;
  font-size: 1.2em;
  svg {
    display: block;
  }
`

const enhance = compose()

const Component = ({ id, name, image, price, description, place, rating }) => (
  <Link to={`/${id}`}>
    <Container style={{ backgroundImage: `url(${image})` }}>
      <section>
        <VoteControls>
          <ThumbsUp size={14} />
          {rating}
          <ThumbsDown size={14} />
        </VoteControls>
        {name} at {place.name}
        <br />
        {description}
        <div className="price">${price}</div>
      </section>
    </Container>
  </Link>
)

export default enhance(Component)
