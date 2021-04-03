import { css } from 'styled-components'

export const sizes = {
  maxMobile: '849px',
  laptop: '850px',
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

export const maxMobile = maxWidth(sizes.maxMobile)
export const minLaptop = minWidth(sizes.laptop)
export const minDesktop = minWidth(sizes.desktop)
