import { css } from 'styled-components'

const base = {
  root: css`
    :root {
      --primary: #23c332;
      --light-gray: #dedede;
      --nav-header-padding: 1rem;
      --nav-header-font-size: 1rem;
      --border-width: 0.17rem;
      --separator-width: 0.07rem;
    }
  `
}

const theme = obj => ({
  ...base,
  root: css`
    ${base.root}
    ${obj.root}
  `
})

export const light = theme({
  root: css`
    :root {
      --backdrop: #f3f3f3;
      --background: #fdfdfd;
    }
  `
})
export const dark = theme({
  root: css`
    :root {
      --backdrop: #0a0a0a;
      --background: #0a0a0a;
    }
  `
})
