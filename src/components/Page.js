import styled, { css } from 'styled-components'

import { laptop, desktop, sizes } from '../themes/media'

const Page = styled.main`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  margin: 0 auto;

  ${laptop(css`
    /* width: ${_ => sizes.laptop}; */
    max-width: 900px;
    padding: 3rem;
  `)}

  ${desktop(css`
    /* width: ${_ => sizes.desktop}; */
    max-width: 1200px;
    padding: 5rem;
  `)}
`

export default Page
