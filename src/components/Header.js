import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled, { css } from 'styled-components'
import logoIcon from '../assets/logo-icon.svg'
import logoText from '../assets/logo-text.png'
import { RoundButton } from './Button'
import { minTablet, minDesktop } from '../themes/media'

const StyledHeader = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1.5rem;

  ${minTablet(css`
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

  ${minTablet(css`
    display: initial;
    margin-left: 1.5rem;
    height: 3rem;
  `)}

  ${minDesktop(css`
    height: 3.5rem;
    margin-left: 2rem;
  `)}
`

// const StyledMenuButton = styled(RoundButton)`
//   margin-left: auto;

//   ${minTablet(css`
//     display: none;
//   `)}
// `

const Header = ({ onToggleNav, navToggled }) => (
  <StyledHeader>
    <StyledLogoIcon src={logoIcon} alt="Logo" />
    <StyledLogoText src={logoText} alt="Text-Logo ORANGE 94.0"/>
    {/* <StyledMenuButton onClick={onToggleNav} big title="Navigation öffnen">
      <FontAwesomeIcon icon={navToggled ? faTimes : faBars} />
    </StyledMenuButton> */}
  </StyledHeader>
)

export default Header
