import styled, { css } from 'styled-components'
import { minLaptop } from '../themes/media'

export const block = css`
  padding: 1rem;
  margin-bottom: var(--layout-gap);

  ${minLaptop(css`
    padding: 1.3rem;
  `)}
`

const Block = styled.div`${block}`

export default Block
