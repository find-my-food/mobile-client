export const upvote = id => ({
  type: 'UPVOTE',
  payload: { id }
})

export const downvote = id => ({
  type: 'DOWNVOTE',
  payload: { id }
})

export const subscribe = id => ({
  type: 'SUBSCRIBE',
  payload: { id }
})
