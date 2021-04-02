import styled, { css } from 'styled-components'
import logoIcon from '../assets/logo-icon.png'
import logoText from '../assets/logo-text.png'

import { laptop, desktop } from '../themes/media'

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5rem;

  ${laptop(css`
    margin-bottom: 3rem;
  `)}

  ${desktop(css`
    margin-bottom: 3rem;
  `)}
`

const StyledLogoIcon = styled.img`
  height: 3rem;

  ${desktop(css`
    height: 3.5rem;
  `)}
`

const StyledLogoText = styled.img`
  display: none;

  ${laptop(css`
    display: initial;
    margin-left: 1.5rem;
    height: 3rem;
  `)}

  ${desktop(css`
    height: 3.5rem;
    margin-left: 2rem;
  `)}
`

const Header = () => (
  <StyledHeader>
    <StyledLogoIcon src={logoIcon} />
    <StyledLogoText src={logoText} />
  </StyledHeader>
)

export default Header
