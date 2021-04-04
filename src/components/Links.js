import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { RoundButtonLink } from './Button'
import cba from '../assets/cba_logo.svg'
import { noMobile, onlyMobile } from '../themes/css'

const StyledLinks = styled.aside`
  display: flex;

  & > * + * {
    margin-left: 0.5rem;
  }
`

const InvertedLogo = styled.img`
  filter: invert(var(--invert-colors));
  width: 66%;
`

const Links = props => (
  <StyledLinks {...props}>
    <RoundButtonLink
      href="https://twitter.com/radio_ORANGE"
      target="_blank"
      rel="noopener"
      title="Twitter"
    >
      <FontAwesomeIcon icon={faTwitter} />
    </RoundButtonLink>
    <RoundButtonLink
      href="https://www.facebook.com/radioorange/"
      target="_blank"
      rel="noopener"
      title="Facebook"
    >
      <FontAwesomeIcon icon={faFacebookF} />
    </RoundButtonLink>
    <RoundButtonLink
      href="https://cba.fro.at/station/orange-940"
      target="_blank"
      rel="noopener"
      title="cba – cultural broadcasting archive"
    >
      <InvertedLogo src={cba} />
    </RoundButtonLink>
  </StyledLinks>
)

export const LinksNoMobile = styled(Links)`
  ${noMobile}
`

export const LinksOnlyMobile = styled(Links)`
  ${onlyMobile}
`

export default Links
