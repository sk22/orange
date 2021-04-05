import { css } from 'styled-components'
import { maxMobile, minTablet } from './media'

export const noMobile = css`
  ${maxMobile(
    css`
      display: none;
    `
  )}
`

export const onlyMobile = css`
  ${minTablet(
    css`
      display: none;
    `
  )}
`
