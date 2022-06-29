import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }

  body {
    /* background: #F8F8F8; */
    background: transparent;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    font-family: 'Poppins', 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`
