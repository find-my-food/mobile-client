import {BASE_COLOR} from '../vars'

export default () => (
  <style jsx global>{`
    html {
      box-sizing: border-box;
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }
    body {
      font-family: sans-serif;
      background: #fafafa;
      margin: 0;
    }
    .phone .statusbar {
      display: none;
    }
    .phone .app {
      height: 100vh;
      width: 100vw;
      overflow: hidden;
      position: relative;
    }
    @media (min-width: 600px) {
      .phone {
        background: #fff;
        border-radius: 68px;
        box-shadow: inset 0 0 0 2px #ddd,
                    inset 0 0 0 6px #eee,
                    0px 2px 50px rgba(0, 0, 0, 0.1);
        height: 872px;
        padding: 102px 22px;
        width: 420px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .phone .screen {
        background-color: #fff;
        border: 2px solid #222;
        border-radius: 4px;
        height: 667px;
        position: relative;
        width: 374px;
      }
      .phone .statusbar {
        display: block;
        height: 20px;
        line-height: 20px;
        padding: 0px 4px;
        background: ${BASE_COLOR};
        color: white;
        font-size: 10px;
      }
      .phone .app {
        height: calc(100% - 20px);
        width: 100%;
      }
    }
  `}</style>
)
