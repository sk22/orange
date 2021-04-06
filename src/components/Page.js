import styled, { css } from 'styled-components'

import { minTablet, minDesktop } from '../themes/media'

const Page = styled.main`
  display: grid;
  padding: 1.5rem;
  margin: 0 auto;
  column-gap: var(--layout-gap);

  grid-template-columns: 1fr;
  grid-template-areas:
    'header'
    'navigation'
    'player'
    'content';

  ${minTablet(css`
    max-width: 900px;
    padding: 3rem;
  `)}

  ${minDesktop(css`
    max-width: 1300px;
    padding: 5rem;
    grid-template-columns: 15rem 3fr;
    grid-template-areas:
      'header header'
      'navigation navigation'
      'player player'
      'timetable content'
      'links content'
      'footer footer';
  `)}
`

export default Page
