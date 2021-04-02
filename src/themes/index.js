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
