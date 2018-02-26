import Link from 'next/link'
import {compose, withProps} from 'recompose'
import styled from 'styled-components'
import {BASE_COLOR} from '../vars'
import moment from 'moment'

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
`

const Description = styled.div`
  padding: 20px;
  margin: 0;
`

const Image = styled.div`
  background-size: 100%;
  background-repeat: no-repeat;
  height: 200px;
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
    background: rgba(0,0,0,.5);
    color: white;
    .price {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      padding: 0px 20px;
    }
  }
`

const enhance = compose(

)

const formatHour = (hour)=>hour > 12 ? hour - 12 + ' pm' : hour + 'am'

const Component = ({id, name, image, price, description, place})=>(
  <Container>
    <Image style={{backgroundImage: `url(${image})`}}>
      <section>
        {name}
        <div className="price">${price}</div>
      </section>
    </Image>

    <Description>
      <p>{description}</p>
      <strong>Hours</strong>
      <p>{formatHour(place.hours[0])} - {formatHour(place.hours[1])}</p>
    </Description>
  </Container>
)

export default enhance(Component)
