export { default as initialState } from '../state'

export const UPVOTE = (state, { id }) => ({
  ...state,
  deals: {
    ...state.deals,
    [id]: {
      ...state.deals[id],
      votes: state.deals[id].votes + 1
    }
  }
})

export const DOWNVOTE = (state, { id }) => ({
  ...state,
  deals: {
    ...state.deals,
    [id]: {
      ...state.deals[id],
      votes: Math.max(0, state.deals[id].votes - 1)
    }
  }
})

export const SUBSCRIBE = (state, { id }) => ({
  ...state,
  places: {
    ...state.places,
    [id]: {
      ...state.places[id],
      isSubscribed: !state.places[id].isSubscribed
    }
  }
})
