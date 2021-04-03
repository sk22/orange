import styled, { css } from 'styled-components'

import { minLaptop, minDesktop, sizes } from '../themes/media'

const Page = styled.main`
  display: grid;
  padding: 1.5rem;
  margin: 0 auto;
  column-gap: var(--layout-gap);

  grid-auto-flow: row;
  grid-template-columns: 1fr;
  grid-template-areas:
    'header'
    'navigation'
    'player';

  ${minLaptop(css`
    /* width: ${_ => sizes.laptop}; */
    max-width: 900px;
    padding: 3rem;
    grid-template-columns: 1fr 4fr;
    grid-template-areas:
      'header header'
      'navigation navigation'
      'player player'
      'schedule content'
      'infos content'
      'footer footer';
  `)}

  ${minDesktop(css`
    /* width: ${_ => sizes.desktop}; */
    max-width: 1200px;
    padding: 5rem;
    grid-template-columns: 3fr 9fr;
  `)}
`

export default Page
