import styled, { css } from 'styled-components'
import { block } from './Block'

export const card = css`
  border-radius: var(--border-radius);
  background: var(--background);
  border: var(--separator-width) solid var(--card-border-color);
  border-bottom: var(--border-width) solid var(--primary);
  box-shadow: var(--box-shadow);
  margin-bottom: var(--layout-gap);
  overflow: hidden;
  word-break: break-word;
`

const Card = styled.aside`
  ${p => !p.noPadding && block}
  ${card}
`

export default Card
