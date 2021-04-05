import { css } from 'styled-components'

export const sizes = {
  maxMobile: '849px',
  tablet: '850px',
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
export const minTablet = minWidth(sizes.tablet)
export const minDesktop = minWidth(sizes.desktop)
