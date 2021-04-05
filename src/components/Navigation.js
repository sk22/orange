import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled, { css } from 'styled-components'
import { minTablet, maxMobile, minDesktop } from '../themes/media'
import { card } from './Card'
import Link from './Link'

const StyledNav = styled.nav`
  grid-area: navigation;
  ${card}
  padding: 0;
  overflow: hidden;
`

const NavUl = styled.ul`
  display: flex;
  position: relative;
  z-index: 0;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 0.9rem;

  ${minTablet(css`
    flex-direction: row;
    justify-content: space-between;
  `)}
`

const highlightColumnCss = css`
  font-weight: bold;
  color: var(--primary-text-color);
  position: relative;
  background: var(--primary);
`

const NavLi = styled.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: calc(2 * var(--nav-header-padding) + var(--nav-header-font-size));
  overflow: hidden;

  & + & {
    ${maxMobile(css`
      border-top: var(--separator-width) solid var(--separator-color);
    `)}

    ${minTablet(css`
      border-left: var(--separator-width) solid var(--separator-color);
    `)}
  }

  /* make sure only one column is highlighted */
  ${minTablet(css`
    &:hover,
    ${NavUl}:not(:hover) &:focus-within {
      ${highlightColumnCss}
    }
  `)}

  ${maxMobile(css`
    &:focus-within {
      ${highlightColumnCss}
    }
  `)}
`

const uncollapseCss = css`
  margin-bottom: 0;
  transform: scaleY(1);
  opacity: 1;
  display: flex;
`

const StyledSubUl = styled.ul`
  display: flex;
  flex: 1;
  padding: 1rem;
  padding-top: 0;
  letter-spacing: initial;
  text-transform: initial;
  list-style: none;
  transition-duration: 0.7s;
  transition-timing-function: ease;
  transform-origin: bottom;
  transform: scaleY(0);
  transition-property: margin-bottom, transform;
  opacity: 0;
  display: flex;
  flex-direction: column;
  margin-bottom: calc(-1 * var(--nav-items-max-height));
  margin-left: 0;

  ${minTablet(css`
    /* estimate of fontawesome angle-right width (list bullet) */
    margin-left: 1.13rem;
    ${NavUl}:focus-within & {
      ${uncollapseCss}
    }
    @media (prefers-reduced-motion: no-preference) {
      ${NavUl}:hover & {
        ${uncollapseCss}
      }
    }
  `)}

  ${maxMobile(css`
    ${NavLi}:focus-within & {
      ${uncollapseCss}
    }
  `)}
`

const SubUl = props => <StyledSubUl className="fa-ul" {...props} />

const SubLi = styled.li`
  ${minTablet(css`
    & .fa-li {
      margin-top: 0.15rem;
    }
  `)}

  & + & {
    margin-top: 0.3rem;
  }
`

const NoMobileIcon = styled(FontAwesomeIcon)`
  ${maxMobile(
    css`
      display: none;
    `
  )}
`

const NavLink = styled(Link)`
  transition: none;
  border-bottom-color: var(--separator-width) solid var(--link-underline-color);

  ${maxMobile(css`
    padding: 0.6rem;
    display: block;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 0.2rem;
  `)}

  ${minTablet(css`
    line-height: 1.2rem;

    &:hover,
    &:focus {
      border-bottom-width: var(--primary-link-border-width);
    }
  `)}

  ${NavLi}:hover &, ${NavUl}:not(:hover) ${NavLi}:focus-within & {
    border-bottom-color: var(--primary-link-border-color);
  }
`

const noEllipsisCss = css`
  text-overflow: unset;
  overflow: hidden;
  white-space: normal;
`

const NavLiHeader = styled.button`
  padding: 1rem;
  width: 100%;
  background: transparent;
  border: none;
  text-transform: uppercase;
  letter-spacing: 0.08rem;
  color: unset;
  font-weight: unset;
  text-align: unset;
  font-size: unset;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  ${minTablet(css`
    ${NavLi}:hover &, ${NavLi}:focus-within & {
      ${noEllipsisCss}
    }
  `)}

  ${maxMobile(css`
    ${NavLi}:focus-within & {
      ${noEllipsisCss}
    }
  `)}
`

const NavItem = props => (
  <SubLi>
    <NoMobileIcon icon={faAngleRight} listItem />
    <NavLink {...props} />
  </SubLi>
)

const Navigation = props => (
  <StyledNav {...props}>
    <NavUl>
      <NavLi>
        <NavLiHeader>Programm</NavLiHeader>
        <SubUl>
          <NavItem href="https://o94.at/de/programm/programm-uebersicht">
            Programm-Übersicht
          </NavItem>
          <NavItem href="https://o94.at/de/programm/sendereihen">
            Sendereihen
          </NavItem>
          <NavItem href="https://o94.at/de/programm/sendungsmacherInnen">
            Radiomacher_innen
          </NavItem>
          <NavItem href="https://o94.at/de/mitmachen">Mitmachen</NavItem>
          <NavItem href="https://o94.at/de/programm/Musiktracker_in-random-order">
            Musik-Tracklist
          </NavItem>
          <NavItem href="https://o94.at/de/rm-vertretung">
            Radiomacher_innen-Vertretung
          </NavItem>
          <NavItem href="https://o94.at/de/hoeren">ORANGE 94.0 Hören</NavItem>
          <NavItem href="https://o94.at/de/programmgremium">
            Programmgremium
          </NavItem>
          <NavItem href="https://o94.at/de/events">
            Veranstaltungen &amp; Feste
          </NavItem>
          <NavItem href="https://o94.at/de/newsletter">Newsletter</NavItem>
          <NavItem href="https://o94.at/de/schwerpunkt-corona">
            Sendeschwerpunkt Corona-Virus
          </NavItem>
          <NavItem href="https://o94.at/de/schulradiotag">
            Sendeschwerpunkt Schulradiotag
          </NavItem>
        </SubUl>
      </NavLi>
      <NavLi>
        <NavLiHeader>Ausbildung</NavLiHeader>
        <SubUl>
          <NavItem href="https://o94.at/de/ausbildung/kurse">Kurse</NavItem>
          <NavItem href="https://o94.at/de/ausbildung/trainerinnen">
            Trainer_innen
          </NavItem>
          <NavItem href="https://o94.at/de/ausbildung/downloads">
            Downloads
          </NavItem>
        </SubUl>
      </NavLi>
      <NavLi>
        <NavLiHeader>Projekte</NavLiHeader>
        <SubUl>
          <NavItem href="https://o94.at/de/andi">ANDI</NavItem>
          <NavItem href="https://o94.at/de/projekte/medienkritik">
            Medienkritik Orange
          </NavItem>
          <NavItem href="https://o94.at/de/post-normal">Post-Normal</NavItem>
          <NavItem href="https://o94.at/de/projekte/globale-dialoge">
            Globale Dialoge
          </NavItem>
          <NavItem href="https://o94.at/de/projekte/RadioMuse">
            RadioMuse
          </NavItem>
          <NavItem href="https://o94.at/de/projekte/Bantaba">Bantaba</NavItem>
          <NavItem href="https://o94.at/de/projekte/radio-auf-graetzltour">
            Radio auf Grätzltour
          </NavItem>
          <NavItem href="https://o94.at/de/projekte/frauen-starten-neu-in-wien">
            Frauen starten neu in Wien
          </NavItem>
          <NavItem href="https://o94.at/de/projekte/delerama">DELERAMA</NavItem>
          <NavItem href="https://o94.at/de/projekte/new-life-in-vienna">
            New Life in Vienna
          </NavItem>
        </SubUl>
      </NavLi>
      <NavLi>
        <NavLiHeader>Über ORANGE 94.0</NavLiHeader>
        <SubUl>
          <NavItem href="https://o94.at/de/about/leitbild">Leitbild</NavItem>
          <NavItem href="https://o94.at/de/about/geschichte">
            Geschichte
          </NavItem>
          <NavItem href="https://o94.at/de/about/mitarbeiterInnen">
            Team
          </NavItem>
          <NavItem href="https://o94.at/de/about/freier-radiobeitrag">
            Freier Radiobeitrag
          </NavItem>
          <NavItem href="https://o94.at/de/presse">Presse</NavItem>
          <NavItem href="https://o94.at/de/about/partner-innen">
            Partner_innen
          </NavItem>
          <NavItem href="https://o94.at/de/about/support">Support</NavItem>
          <NavItem href="https://o94.at/de/about/kontakt">Kontakt</NavItem>
          <NavItem href="https://o94.at/de/node/108">Aktuelles</NavItem>
          <NavItem href="https://o94.at/de/intern">o94 intern</NavItem>
          <NavItem href="https://o94.at/de/Orangenes-Gremium">
            Orangenes Gremium
          </NavItem>
          <NavItem href="https://o94.at/de/jobs">Jobs</NavItem>
        </SubUl>
      </NavLi>
    </NavUl>
  </StyledNav>
)

export default Navigation
