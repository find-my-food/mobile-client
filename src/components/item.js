import React from 'react'
import { Link } from 'react-router-dom'
import { compose, withProps } from 'recompose'
import styled from 'styled-components'
import { BASE_COLOR } from '../vars'
import { ThumbsUp, ThumbsDown } from 'react-feather'

const Container = styled.li`
  text-decoration: none;
  display: block;
  margin: 0;
  position: relative;
  &:active {
    transform: scale(0.99);
  }
  .img {
    height: 200px;
    background-size: cover;
    margin: 5px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
    margin-bottom: 0;
  }
  section {
    position: relative;
    height: 80px;
    padding: 0px 20px;
    background: white;
    color: #333;
    padding-top: 10px;
    margin: 10px;
    margin-top: 0px;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
    border-top: 0;
    h2 {
      margin: 5px 0;
      font-size: 1.2em;
      font-weight: normal;
    }
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

const Component = ({
  id,
  placeId,
  name,
  image,
  price,
  description,
  place,
  rating
}) => (
  <Link to={`/${placeId}`} style={{ textDecoration: 'none' }}>
    <Container>
      <div className="img" style={{ backgroundImage: `url(${image})` }} />
      <section>
        <VoteControls>
          <ThumbsUp size={14} />
          {rating}
          <ThumbsDown size={14} />
        </VoteControls>
        <h2>{name}</h2>
        {place.name}
        <div className="price">${price}</div>
      </section>
    </Container>
  </Link>
)

export default enhance(Component)
