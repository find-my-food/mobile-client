import styled from 'styled-components'
import {BASE_COLOR} from '../vars'

export default styled.div`
  background: ${BASE_COLOR};
  height: 44px;
  line-height: 44px;
  text-align: center;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 44px;
  .back {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    padding: 0px 20px;
    &:active {
      background: rgba(0,0,0,.1);
    }
  }
`
