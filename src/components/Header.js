import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled, { css } from 'styled-components'
import logoIcon from '../assets/logo-icon.png'
import logoText from '../assets/logo-text.png'
import { RoundButton } from './Button'
import { laptop, desktop } from '../themes/media'

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
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

const StyledMenuButton = styled(RoundButton)`
  ${laptop(css`
    display: none;
  `)}
  margin-left: auto;
`

const Header = ({ onToggleNav, navToggled }) => (
  <StyledHeader>
    <StyledLogoIcon src={logoIcon} />
    <StyledLogoText src={logoText} />

    <StyledMenuButton onClick={onToggleNav}>
      <FontAwesomeIcon icon={navToggled ? faTimes : faBars} />
    </StyledMenuButton>
  </StyledHeader>
)

export default Header
