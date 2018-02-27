import styled from 'styled-components'
import { BASE_COLOR } from '../vars'

export default styled.div`
  background: ${BASE_COLOR};
  height: 66px;
  line-height: 44px;
  text-align: center;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 5px;
  box-shadow: 0px -1px 0px 0px #0000006b inset;
  backdrop-filter: blur(6px);
`
