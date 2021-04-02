import { css } from 'styled-components'

export const sizes = {
  maxMobile: '767px',
  laptop: '768px',
  desktop: '1024px'
}

export const maxWidth = (size) => styles => css`
  @media screen and (max-width: ${size}) {
    ${styles}
  }
`

export const minWidth = (size) => styles => css`
  @media screen and (min-width: ${size}) {
    ${styles}
  }
`

export const mobile = maxWidth(sizes.maxMobile)
export const laptop = minWidth(sizes.laptop)
export const desktop = minWidth(sizes.desktop)
