import { css } from 'styled-components'
import { maxMobile, minLaptop } from './media'

export const noMobile = css`
  ${maxMobile(
    css`
      display: none;
    `
  )}
`

export const onlyMobile = css`
  ${minLaptop(
    css`
      display: none;
    `
  )}
`
