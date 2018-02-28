export const initialState = {}

export const ADD_TO_CART = (cart, { id }) => ({
  ...cart,
  [id]: {
    count: ((cart[id] || {}).count || 0) + 1
  }
})

const filterObj = obj =>
  Object.keys(obj)
    .map(key => ({
      key: key,
      item: obj[key]
    }))
    .filter(({ item }) => item.count > 0)
    .reduce((obj, { key, item }) => Object.assign(obj, { [key]: item }), {})

export const REMOVE_FROM_CART = (cart, { id }) =>
  filterObj({
    ...cart,
    [id]: {
      count: (cart[id].count || 0) - 1
    }
  })
