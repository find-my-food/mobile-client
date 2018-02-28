let uniqueId = 123456
const state = {}

const Entity = ({ collection }) => {
  state[collection] = {}
  
  return props => {
    const id = (++uniqueId).toString(36)
    state[collection][id] = { id, ...props }
    return id
  }
}

const Deal = Entity({ collection: 'deals' })
const Place = Entity({ collection: 'places' })
const MenuItem = Entity({ collection: 'menuItems' })

const tacoPlaceId = Place({
  name: 'The Taco Bus',
  hours: [9, 17],
  location: [43.818719, -111.782793]
})

Deal({
  name: 'Tacos',
  description: `There are tacos for sale at this place. Come and get them while they're hot!`,
  price: 5,
  votes: 6,
  image: `https://images.unsplash.com/photo-1512427691650-15fcce1dc7b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9385b78d6bbaf37cb18a6fea90b804e2&auto=format&fit=crop&w=2551&q=80`,
  placeId: tacoPlaceId
})

MenuItem({
  name: 'More Tacos',
  price: 3,
  placeId: tacoPlaceId
})
MenuItem({
  name: 'More Tacos',
  price: 3,
  placeId: tacoPlaceId
})
MenuItem({
  name: 'More Tacos',
  price: 3,
  placeId: tacoPlaceId
})
MenuItem({
  name: 'More Tacos',
  price: 3,
  placeId: tacoPlaceId
})
MenuItem({
  name: 'More Tacos',
  price: 3,
  placeId: tacoPlaceId
})

const burgerPlaceId = Place({
  name: 'The Burger Place',
  hours: [9, 17],
  location: [43.819265, -111.782681]
})

Deal({
  name: 'Burgers',
  description: 'There are burgers for sale at this place.',
  price: 5,
  votes: 3,
  image: `https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?ixlib=rb-0.3.5&s=5e502350cbc235d8c5441c81da8854e4&auto=format&fit=crop&w=1934&q=80`,
  placeId: burgerPlaceId
})

MenuItem({
  name: 'More Burgers',
  price: 3,
  placeId: burgerPlaceId
})
MenuItem({
  name: 'More Burgers',
  price: 3,
  placeId: burgerPlaceId
})
MenuItem({
  name: 'More Burgers',
  price: 3,
  placeId: burgerPlaceId
})
MenuItem({
  name: 'More Burgers',
  price: 3,
  placeId: burgerPlaceId
})
MenuItem({
  name: 'More Burgers',
  price: 3,
  placeId: burgerPlaceId
})

const soupPlaceId = Place({
  name: 'The Soup Place',
  hours: [9, 17],
  location: [43.81702, -111.781474]
})

Deal({
  name: 'Soup',
  description: 'There is soup for sale here at this place.',
  price: 5,
  votes: 2,
  image: `https://images.unsplash.com/photo-1505253668822-42074d58a7c6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=173652e77ca58a61c86233ca20d89d6a&auto=format&fit=crop&w=934&q=80`,
  placeId: soupPlaceId
})

MenuItem({
  name: 'More Soup',
  price: 3,
  placeId: soupPlaceId
})
MenuItem({
  name: 'More Soup',
  price: 3,
  placeId: soupPlaceId
})
MenuItem({
  name: 'More Soup',
  price: 3,
  placeId: soupPlaceId
})
MenuItem({
  name: 'More Soup',
  price: 3,
  placeId: soupPlaceId
})
MenuItem({
  name: 'More Soup',
  price: 3,
  placeId: soupPlaceId
})

const pastaPlaceId = Place({
  name: 'The Pasta Place',
  hours: [9, 17],
  location: [43.818559, -111.782477]
})

Deal({
  name: 'Pasta',
  description: 'There is Pasta for sale here at this place.',
  price: 5,
  votes: 8,
  image: `https://images.unsplash.com/photo-1453831362806-3d5577f014a4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9dd8da96be0724ab84e4147d428f6bba&auto=format&fit=crop&w=2238&q=80`,
  placeId: pastaPlaceId
})

MenuItem({
  name: 'More Pasta',
  price: 3,
  placeId: pastaPlaceId
})
MenuItem({
  name: 'More Pasta',
  price: 3,
  placeId: pastaPlaceId
})
MenuItem({
  name: 'More Pasta',
  price: 3,
  placeId: pastaPlaceId
})
MenuItem({
  name: 'More Pasta',
  price: 3,
  placeId: pastaPlaceId
})
MenuItem({
  name: 'More Pasta',
  price: 3,
  placeId: pastaPlaceId
})

export default state
