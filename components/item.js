import Link from 'next/link'
import {compose, withProps} from 'recompose'
import styled from 'styled-components'
import {BASE_COLOR} from '../vars'

const Container = styled.li`
  display: block;
  margin: 5px;
  height: 200px;
  position: relative;
  background-size: 100%;
  box-shadow: 0px 0px 4px rgba(0,0,0,.3);
  &:active {
    transform: scale(.99);
  }
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

const Component = ({id, name, image, price})=>(
  <Link href={`/?id=${id}`}>
    <Container style={{backgroundImage: `url(${image})`}}>
      <section>
        {name}
        <div className="price">${price}</div>
      </section>
    </Container>
  </Link>
)

export default enhance(Component)
