import { css } from 'styled-components'
import arvo from '../assets/arvo.woff2'

const base = css`
  :root {
    --primary: #23c332;
    --nav-header-padding: 1rem;
    --nav-header-font-size: 1rem;
    --nav-mobile-max-height: 70rem;
    --nav-items-max-height: 30rem;
    --border-width: 0.17rem;
    --separator-width: 0.07rem;
    --text-block-margin: 0.3rem;
  }

  * {
    box-sizing: border-box;
  }

  html {
    background: var(--backdrop);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: 'Arvo';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url(${arvo}) format('woff2');
  }
`

export const light = css`
  :root {
    --invert-colors: 0;
    --backdrop: #f3f3f3;
    --background: #fdfdfd;
    --separator-color: #dedede;
    --link-underline-color: #b0b0b0;
    --link-underline-hover-color: black;
    --card-border-color: none;
  }

  body {
    color: black;
  }
`

export const dark = css`
  :root {
    --invert-colors: 1;
    --backdrop: #020202;
    --background: #020202;
    --separator-color: #303030;
    --link-underline-color: #a0a0a0;
    --link-underline-hover-color: white;
    --card-border-color: var(--separator-color);
  }

  body {
    color: white;
  }
`

const global = css`
  ${base}
  ${light}

  @media (prefers-color-scheme: dark) {
    ${dark}
  }
`

const theme = { global }

export default theme