import React from 'react'
import Header from '../components/header'
import Main from '../components/main'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import state from '../state'

const position = [43.816208, -111.782233]

export default () => (
  <div>
    <Header nav>Map</Header>
    <Main>
      <Map
        style={{ boxSizing: 'content-box', height: '100%' }}
        center={position}
        zoom={15.5}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {Object.keys(state.places)
          .map(k => state.places[k])
          .map(({ location, name }) => (
            <Marker position={location} zIndexOffset={1000}>
              <Popup>
                <span>{name}</span>
              </Popup>
            </Marker>
          ))}
      </Map>
    </Main>
  </div>
)
