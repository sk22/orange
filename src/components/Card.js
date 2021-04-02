import styled, { css } from 'styled-components'
import { block } from './Block'

export const card = css`
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  background: var(--background);
  border: var(--separator-width) solid var(--card-border-color);
  border-bottom: var(--border-width) solid var(--primary);
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.07), 0 2px 8px rgba(0, 0, 0, 0.12);
`

const Card = styled.aside`
  ${p => !p.noPadding && block}
  ${card}
`

export default Card
