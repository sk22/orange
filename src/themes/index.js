import { css } from 'styled-components'

const base = {
  global: css`
    :root {
      --primary: #23c332;
      --light-gray: #dedede;
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
      src: url(https://fonts.gstatic.com/s/arvo/v14/tDbN2oWUg0MKqSIg75Tv.woff2)
        format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
        U+2212, U+2215, U+FEFF, U+FFFD;
    }
  `
}

const theme = obj => ({
  ...base,
  global: css`
    ${base.global}
    ${obj.global}
  `
})

export const light = theme({
  global: css`
    :root {
      --backdrop: #f3f3f3;
      --background: #fdfdfd;
    }
  `
})
export const dark = theme({
  global: css`
    :root {
      --backdrop: #0a0a0a;
      --background: #0a0a0a;
    }
  `
})
