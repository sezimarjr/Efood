import { createGlobalStyle } from 'styled-components'

export const cores = {
  laranja: '#E66767',
  background: '#FFF8F2'
}

export const breakpoints = {
  mobile: '424px',
  tablet: '767px',
  desktop: '1023px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body{
    background-color: ${cores.background};
  }

  .container {
    max-width: 1024px;
    margin: 0 auto;
    width: 100%;
  }
`
