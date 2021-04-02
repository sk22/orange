import styled, { css } from 'styled-components'
import { laptop } from '../themes/media'

export const block = css`
  border-radius: 0.5rem;
  padding: 1.5rem;

  ${laptop(css`
    padding: 1.5rem 2rem;
  `)}
`

const Block = styled.section`${block}`

export default Block
