import styled from 'styled-components'
import { BASE_COLOR, HEADER_HEIGHT } from '../vars'

export default styled.main`
  position: absolute;
  top: ${HEADER_HEIGHT};
  left: 0;
  right: 0;
  bottom: 0;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  background: #fafafa;
`
