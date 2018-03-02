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
    padding-left: 60px;
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
      display: flex;
      align-items: center;
      padding: 0px 20px;
      top: 25px;
      font-size: 1.5em;
      left: 0px;
    }
  }
`

const VoteControls = styled.div`
  float: right;
  text-align: center;
  font-size: 1.2em;
  height: 100%;
  display: flex;
  align-items: center;
  margin-top: -5px;
  margin-left: -5px;
  padding-right: 10px;
`

const VoteButton = styled.button`
  border: 1px solid #ccc;
  background: transparent;
  padding: 5px;
  border-radius: 100px;
  width: 32px;
  &:focus {
    outline: none;
  }
  &:active {
    background: rgba(0, 0, 0, 0.05);
  }
  &:disabled {
    opacity: 0.3;
  }
`

const VoteSum = styled.div`
  display: inline-block;
  padding: 5px;
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
          <VoteButton>
            <ThumbsUp size={18} onClick={upvote} />
          </VoteButton>
          <VoteSum>{votes}</VoteSum>
          <VoteButton disabled={votes <= 0} onClick={downvote}>
            <ThumbsDown size={18} />
          </VoteButton>
        </VoteControls>
        <h2>{name}</h2>
        {place.name}
        <div className="price">${price}</div>
      </section>
    </Link>
  </Container>
)

export default enhance(Component)
