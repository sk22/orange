import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled, { css } from 'styled-components'
import { minLaptop, maxMobile } from '../themes/media'
import { card } from './Card'
import Link from './Link'

const StyledNav = styled.nav`
  grid-area: navigation;
  ${card}
  padding: 0;
  overflow: hidden;

  ${maxMobile(css`
    height: auto;
    max-height: 0;
    /* margin-bottom: -5rem; */
    opacity: 0;
    transform: scale(0.97);
    transition-duration: 0.4s;
    transition-timing-function: ease;
    transition-property: transform, opacity, max-height, margin-bottom;

    ${p =>
      !p.toggled &&
      css`
        margin-bottom: 0;
      `}

    ${p =>
      p.toggled &&
      css`
        max-height: var(--nav-mobile-max-height);
        opacity: 1;
        transform: scale(1);
      `}
  `)}
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

  ${minLaptop(css`
    flex-direction: row;
    justify-content: space-between;
  `)}
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

    ${minLaptop(css`
      border-left: var(--separator-width) solid var(--separator-color);
    `)}
  }

  &:hover,
  &:focus-within {
    font-weight: bold;
    color: white;
    position: relative;
    background: var(--primary);
  }
`

const uncollapsedCss = css`
  margin-bottom: 0;
  transform: scaleY(1);
  opacity: 1;
  display: flex;
`

const StyledSubUl = styled.ul`
  display: flex;
  flex: 1;
  padding: 1rem;
  padding-top: 0rem;
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
  margin-left: 1rem;

  ${minLaptop(css`
    ${NavUl}:hover &, ${NavUl}:focus-within & {
      ${uncollapsedCss}
    }
  `)}

  ${maxMobile(css`
    ${NavLi}:focus-within & {
      ${uncollapsedCss}
    }
  `)}
`

const SubUl = props => <StyledSubUl className="fa-ul" {...props} />

const SubLi = styled.li`
  & + & {
    margin-top: 0.2rem;
  }
`

const NavLink = styled(Link)`
  transition: none;

  &:hover,
  &:focus {
    border-bottom-width: var(--primary-link-border-width);
  }

  ${NavLi}:hover &, ${NavLi}:focus-within & {
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

  ${minLaptop(css`
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
    <FontAwesomeIcon icon={faAngleRight} listItem />
    <NavLink {...props} />
  </SubLi>
)

const Navigation = ({ toggled }) => (
  <StyledNav toggled={toggled}>
    <NavUl>
      <NavLi>
        <NavLiHeader>Programm</NavLiHeader>
        <SubUl>
          <NavItem href="/de/programm/programm-uebersicht">
            Programm-Übersicht
          </NavItem>
          <NavItem href="/de/programm/sendereihen">Sendereihen</NavItem>
          <NavItem href="/de/programm/sendungsmacherInnen">
            Radiomacher_innen
          </NavItem>
          <NavItem href="/de/mitmachen">Mitmachen</NavItem>
          <NavItem href="/de/programm/Musiktracker_in-random-order">
            Musik Tracklist
          </NavItem>
          <NavItem href="/de/rm-vertretung">
            Radiomacher_innen-Vertretung
          </NavItem>
          <NavItem href="/de/hoeren">ORANGE 94.0 Hören</NavItem>
          <NavItem href="/de/programmgremium">Programmgremium</NavItem>
          <NavItem href="/de/events">Veranstaltungen &amp; Feste</NavItem>
          <NavItem href="/de/newsletter">Newsletter</NavItem>
          <NavItem href="/de/schwerpunkt-corona">
            Sendeschwerpunkt Corona-Virus
          </NavItem>
          <NavItem href="/de/schulradiotag">
            Sendeschwerpunkt Schulradiotag
          </NavItem>
        </SubUl>
      </NavLi>
      <NavLi>
        <NavLiHeader>Ausbildung</NavLiHeader>
        <SubUl>
          <NavItem href="/de/ausbildung/kurse">Kurse</NavItem>
          <NavItem href="/de/ausbildung/trainerinnen">Trainer_innen</NavItem>
          <NavItem href="/de/ausbildung/downloads">Downloads</NavItem>
        </SubUl>
      </NavLi>
      <NavLi>
        <NavLiHeader>Projekte</NavLiHeader>
        <SubUl>
          <NavItem href="/de/andi">ANDI</NavItem>
          <NavItem href="/de/projekte/medienkritik">
            Medienkritik Orange
          </NavItem>
          <NavItem href="/de/post-normal">Post-Normal</NavItem>
          <NavItem href="/de/projekte/globale-dialoge">Globale Dialoge</NavItem>
          <NavItem href="/de/projekte/RadioMuse">RadioMuse</NavItem>
          <NavItem href="/de/projekte/Bantaba">Bantaba</NavItem>
          <NavItem href="/de/projekte/radio-auf-graetzltour">
            Radio auf Grätzltour
          </NavItem>
          <NavItem href="/de/projekte/frauen-starten-neu-in-wien">
            Frauen starten neu in Wien
          </NavItem>
          <NavItem href="/de/projekte/delerama">DELERAMA</NavItem>
          <NavItem href="/de/projekte/new-life-in-vienna">
            New Life in Vienna
          </NavItem>
        </SubUl>
      </NavLi>
      <NavLi>
        <NavLiHeader>Über ORANGE 94.0</NavLiHeader>
        <SubUl>
          <NavItem href="/de/about/leitbild">Leitbild</NavItem>
          <NavItem href="/de/about/geschichte">Geschichte</NavItem>
          <NavItem href="/de/about/mitarbeiterInnen">Team</NavItem>
          <NavItem href="/de/about/freier-radiobeitrag">
            Freier Radiobeitrag
          </NavItem>
          <NavItem href="/de/presse">Presse</NavItem>
          <NavItem href="/de/about/partner-innen">Partner_innen</NavItem>
          <NavItem href="/de/about/support">Support</NavItem>
          <NavItem href="/de/about/kontakt">Kontakt</NavItem>
          <NavItem href="/de/node/108">Aktuelles</NavItem>
          <NavItem href="/de/intern">o94 intern</NavItem>
          <NavItem href="/de/Orangenes-Gremium">Orangenes Gremium</NavItem>
          <NavItem href="/de/jobs">Jobs</NavItem>
        </SubUl>
      </NavLi>
    </NavUl>
  </StyledNav>
)

export default Navigation
