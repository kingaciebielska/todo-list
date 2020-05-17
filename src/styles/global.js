import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  a {
    text-decoration: none;
  }

  button,
  input {
    outline: none;
  }

  button {
    cursor: pointer;
  }

//animation shake on errorMessage
  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
  }

//animation on remove item
  @keyframes slideOut {
    0% {
      transform: skew(0deg);
    }

    10% {
      transform: skew(-15deg);
    }

    10% {
      transform: skew(0deg translate(0));
    }

    70% {
      transform: skew(-20deg);
      opacity: 1;
    }

    90% {
      transform: skewX(43deg) translateX(-60%);
      opacity: 0;
    }
  }
`

export default GlobalStyle
