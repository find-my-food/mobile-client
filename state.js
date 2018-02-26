export default {
  deals: [{
    name: 'Tacos',
    description: `There are tacos for sale at this place. Come and get them while they're hot!`,
    price: 5,
    image: `https://images.unsplash.com/photo-1512427691650-15fcce1dc7b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9385b78d6bbaf37cb18a6fea90b804e2&auto=format&fit=crop&w=2551&q=80`,
    placeId: 'a'
  },{
    name: 'Burgers',
    description: 'There are burgers for sale at this place.',
    price: 5,
    image: `https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?ixlib=rb-0.3.5&s=5e502350cbc235d8c5441c81da8854e4&auto=format&fit=crop&w=1934&q=80`,
    placeId: 'b'
  },{
    name: 'Soup',
    description: 'There is soup for sale here at this place.',
    price: 5,
    image: `https://images.unsplash.com/photo-1505253668822-42074d58a7c6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=173652e77ca58a61c86233ca20d89d6a&auto=format&fit=crop&w=934&q=80`,
    placeId: 'c'
  },{
    name: 'Pasta',
    description: 'There is Pasta for sale here at this place.',
    price: 5,
    image: `https://images.unsplash.com/photo-1453831362806-3d5577f014a4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9dd8da96be0724ab84e4147d428f6bba&auto=format&fit=crop&w=2238&q=80`,
    placeId: 'd'
  }],
  places: {
    'a': {
      name: 'Taco Bus',
      hours: [9, 17]
    },
    'b': {
      name: 'Burger Place',
      hours: [9, 17]
    },
    'c': {
      name: 'Soup Place',
      hours: [9, 17]
    },
    'd': {
      name: 'Kolachi Place',
      hours: [9, 17]
    }
  }
}
