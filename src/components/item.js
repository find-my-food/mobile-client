import React from 'react'
import { Link } from 'react-router-dom'
import { compose, withHandlers } from 'recompose'
import styled from 'styled-components'
import { ThumbsUp, ThumbsDown } from 'react-feather'
import actions from '../actions'

const Container = styled.li`
  text-decoration: none;
  display: block;
  margin: 0;
  position: relative;
  .img {
    height: 200px;
    background-size: cover;
    margin: 5px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.6), 0px 0px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 0;
    position: relative;
    z-index: 1;
    border-radius: 3px;
    &:active {
      transform: scale(0.99);
    }
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
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
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

const enhance = compose(
  withHandlers({
    upvote: ({ id }) => e => {
      e.preventDefault()
      actions.upvote(id)
    },
    downvote: ({ id }) => e => {
      e.preventDefault()
      actions.downvote(id)
    }
  })
)

const Component = ({
  placeId,
  name,
  image,
  price,
  place,
  votes,
  upvote,
  downvote
}) => (
  <Container>
    <Link to={`/${placeId}`} style={{ textDecoration: 'none' }}>
      <div className="img" style={{ backgroundImage: `url(${image})` }} />
      <section>
        <VoteControls>
          <ThumbsUp size={14} onClick={upvote} />
          {votes}
          {votes > 0 && <ThumbsDown size={14} onClick={downvote} />}
        </VoteControls>
        <h2>{name}</h2>
        {place.name}
        <div className="price">${price}</div>
      </section>
    </Link>
  </Container>
)

export default enhance(Component)
