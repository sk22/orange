import styled, { css } from 'styled-components'
import { laptop } from '../themes/media'

export const block = css`
  padding: 1.2rem;

  ${laptop(css`
    padding: 1.5rem;
  `)}
`

const Block = styled.div`${block}`

export default Block
