import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled, { css } from 'styled-components'
import logoIcon from '../assets/logo-icon.png'
import logoText from '../assets/logo-text.png'
import { RoundButton } from './Button'
import { minLaptop, minDesktop } from '../themes/media'

const StyledHeader = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1.5rem;

  ${minLaptop(css`
    margin-bottom: 3rem;
  `)}

  ${minDesktop(css`
    margin-bottom: 3rem;
  `)}
`

const StyledLogoIcon = styled.img`
  height: 3rem;
  filter: invert(var(--invert-colors));

  ${minDesktop(css`
    height: 3.5rem;
  `)}
`

const StyledLogoText = styled.img`
  display: none;
  filter: invert(var(--invert-colors));

  ${minLaptop(css`
    display: initial;
    margin-left: 1.5rem;
    height: 3rem;
  `)}

  ${minDesktop(css`
    height: 3.5rem;
    margin-left: 2rem;
  `)}
`

const StyledMenuButton = styled(RoundButton)`
  margin-left: auto;

  ${minLaptop(css`
    display: none;
  `)}
`

const Header = ({ onToggleNav, navToggled }) => (
  <StyledHeader>
    <StyledLogoIcon src={logoIcon} />
    <StyledLogoText src={logoText} />
    <StyledMenuButton onClick={onToggleNav} big>
      <FontAwesomeIcon icon={navToggled ? faTimes : faBars} />
    </StyledMenuButton>
  </StyledHeader>
)

export default Header
