import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link, withRouter } from 'react-router-dom'
import { compose, withProps } from 'recompose'
import { ChevronLeft } from 'react-feather'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { connect } from 'react-redux'
import Header from '../components/header'
import Main from '../components/main'
import { HEADER_HEIGHT } from '../vars'

const ContainerInAnim = keyframes`
  from {
    transform: translateY(100px);
    opacity: .8;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const Container = styled.div`
  animation: ${ContainerInAnim} 0.15s;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
`

const Back = styled(Link)`
  background: transparent;
  border: 0px;
  display: block;
  color: white;
  position: absolute;
  left: 0;
  bottom: 0;
  height: ${HEADER_HEIGHT};
  padding: 0px 30px;
  z-index: 1000;
  line-height: ${HEADER_HEIGHT};
  &:link {
    text-decoration: none;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const Description = styled.div`
  padding: 20px;
  margin: 0;
`

const Image = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  position: relative;
  section {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0px 20px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
  }
`

const OrderButton = styled(Link)`
  display: block;
  border-radius: 7px;
  border: 1px solid #ccc;
  background: white;
  width: 100%;
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 2em;
  text-align: center;
  transition-duration: 0.2s;
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
    transition-duration: 0s;
    background: rgba(0, 0, 0, 0.1);
    border: 1px solid #aaa;
  }
  &:focus {
    outline: none;
  }
`

const MenuTable = styled.table`
  width: 100%;
  border-spacing: 0;
  border: 1px solid #ccc;
  background: white;
  margin-top: 10px;
  td {
    padding: 10px;
    &:first-child {
      border-right: 1px solid #ccc;
    }
  }
  tr {
    &:not(:last-child) td {
      border-bottom: 1px solid #ccc;
    }
  }
`

const enhance = compose(
  withRouter,
  connect(state => ({ data: state.data })),
  withProps(({ match }) => match.params),
  withProps(({ selectedId, data }) => ({
    place: {
      ...data.places[selectedId],
      deal: Object.keys(data.deals)
        .map(k => data.deals[k])
        .find(d => d.placeId === selectedId),
      menu: Object.keys(data.menuItems)
        .map(key => data.menuItems[key])
        .filter(x => x.placeId === selectedId)
    }
  }))
)

const formatHour = hour => (hour > 12 ? hour - 12 + ' pm' : hour + 'am')

const Component = ({ place, children }) => (
  <Container>
    <Header style={{ zIndex: 1000, background: 'rgba(0,0,0,.8)' }}>
      <Back to="/">
        <ChevronLeft />
      </Back>
      {place.name}
    </Header>
    <Main style={{ top: 0, bottom: 0 }}>
      <Image style={{ backgroundImage: `url(${place.deal.image})` }} />

      <Description>
        <OrderButton to={`/${place.id}/order`}>
          Order {place.deal.name} (${place.deal.price})
        </OrderButton>
        <p>{place.deal.description}</p>
        <br />
        <strong>Hours</strong>
        <p>
          {formatHour(place.hours[0])} - {formatHour(place.hours[1])}
        </p>
        <strong>Menu</strong>
        <MenuTable>
          <tbody>
            {place.menu.map(({ id, name, price }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>${price}</td>
              </tr>
            ))}
          </tbody>
        </MenuTable>
        <br />
        <Map
          style={{ boxSizing: 'content-box', height: '200px' }}
          center={place.location}
          zoom={16}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={place.location} zIndexOffset={1000}>
            <Popup>
              <span>{place.name}</span>
            </Popup>
          </Marker>
        </Map>
        <br />
      </Description>
    </Main>
    {children}
  </Container>
)

const IndexComponent = enhance(Component)

export default IndexComponent
