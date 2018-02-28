import React from 'react'
import styled from 'styled-components'
import Header from '../components/header'
import Main from '../components/main'
import { connect } from 'react-redux'
import { compose, withProps } from 'recompose'
import actions from '../actions'

const Table = styled.table`
  width: calc(100% - 20px);
  border-spacing: 0;
  border: 1px solid #ccc;
  background: white;
  margin: 10px;
  thead {
    background: rgba(0, 0, 0, 0.01);
    td {
      border-bottom: 1px solid #ccc;
    }
  }
  td {
    padding: 10px;
    &:not(:last-child) {
      border-right: 1px solid #ccc;
    }
  }
  tr {
    &:not(:last-child) td {
      border-bottom: 1px solid #ccc;
    }
  }
`

const ConfirmButton = styled.button`
  display: block;
  border-radius: 7px;
  border: 1px solid #ccc;
  background: white;
  width: calc(100% - 20px);
  margin: 10px;
  font-size: 16px;
  line-height: 2em;
  text-align: center;
  &:link {
    color: black;
    text-decoration: none;
  }
  &:visited {
    color: black;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.02);
  }
  &:active {
    background: rgba(0, 0, 0, 0.1);
    border: 1px solid #aaa;
  }
  &:focus {
    outline: none;
  }
`

const EmptyState = styled.div`
  text-align: center;
  padding: 20px;
`

const enhance = compose(
  connect(state => ({ cart: state.cart, deals: state.data.deals })),
  withProps(({ cart, deals }) => ({
    items: Object.keys(cart).map(id => ({
      ...deals[id],
      count: cart[id].count
    }))
  })),
  withProps(({ items }) => ({
    total: items.reduce((sum, item) => item.count * item.price + sum, 0)
  }))
)

const Component = ({ items, total }) => (
  <div>
    <Header nav>Cart</Header>
    <Main>
      {items.length !== 0 ? (
        <React.Fragment>
          <Table>
            <thead>
              <tr>
                <td>Price</td>
                <td>Name</td>
                <td>Count</td>
                <td />
              </tr>
            </thead>
            <tbody>
              {items.map(({ name, price, count, id }) => (
                <tr key={id}>
                  <td>${price}</td>
                  <td>{name}</td>
                  <td>{count}</td>
                  <td>
                    <button onClick={() => actions.addToCart(id)}>+</button>
                    <button onClick={() => actions.removeFromCart(id)}>
                      -
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Table>
            <tbody>
              <tr>
                <td>Price</td>
                <td>${total}</td>
              </tr>
            </tbody>
          </Table>
          <ConfirmButton>Confirm</ConfirmButton>
        </React.Fragment>
      ) : (
        <EmptyState>Your cart is empty</EmptyState>
      )}
    </Main>
  </div>
)

export default enhance(Component)
