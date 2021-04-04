import { useState } from 'react'
import styled, {
  createGlobalStyle,
  css,
  ThemeProvider
} from 'styled-components'
import { block } from './components/Block'
import Collapse, { uncollapseCss } from './components/Collapse'
import Header from './components/Header'
import { LinksNoMobile, LinksOnlyMobile } from './components/Links'
import Navigation from './components/Navigation'
import Page from './components/Page'
import Player from './components/Player'
import Timetable from './components/Timetable'
import { minDesktop, minLaptop } from './themes/media'
import orange from './themes/orange'
import ctw from './assets/ctw2021_banner_web.png'

const GlobalStyle = createGlobalStyle`
  ${p => p.theme.global}
`

const PageContent = styled.article`
  margin-bottom: var(--layout-gap);

  & > img {
    width: 100%;
    border-radius: var(--border-radius);
  }
`

const PageNavCollapse = styled(Collapse)`
  grid-area: navigation;
  position: relative;
  z-index: 0;

  /* ensuring padding for the drop shadow not being cut off */
  padding: var(--box-shadow-preserve-space);
  margin: calc(-1 * var(--box-shadow-preserve-space));

  & ${LinksOnlyMobile} {
    margin-bottom: 1rem;
  }

  ${minLaptop(uncollapseCss)}
`

const PagePlayer = styled(Player)`
  grid-area: player;
  position: relative;
  z-index: 1;
`

const navCollapsedCss = css`
  transform: scale(0.97);
  opacity: 0;
`

const navUncollapsedCss = css`
  transform: scale(1);
  opacity: 1;
`

const PageTimetable = styled(Timetable)`
  display: none;

  ${minDesktop(css`
    display: initial;
  `)}
`

const App = () => {
  const [navToggled, setNavToggled] = useState(false)

  return (
    <ThemeProvider theme={orange}>
      <GlobalStyle />
      <Page>
        <Header
          onToggleNav={() => setNavToggled(!navToggled)}
          navToggled={navToggled}
        />
        <PageNavCollapse
          collapsed={!navToggled}
          maxSize="var(--nav-mobile-max-height)"
          transitionDuration="0.5s"
          transformOrigin="bottom"
          transitionProperty="opacity, max-height"
          collapsedCss={navCollapsedCss}
          uncollapsedCss={navUncollapsedCss}
        >
          <Navigation />
          <LinksOnlyMobile />
        </PageNavCollapse>
        <PagePlayer />
        <PageTimetable />
        <PageContent>
          <img
            src={ctw}
            alt="Claim the Waves: Save the Date: Feministische Radiotage 8.-11. Juli 2021"
          />
        </PageContent>
        <LinksNoMobile />
      </Page>
    </ThemeProvider>
  )
}

export default App
