import { useState } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { block } from './components/Block'
import Collapse from './components/Collapse'
import Header from './components/Header'
import { LinksNoMobile, LinksOnlyMobile } from './components/Links'
import Navigation from './components/Navigation'
import Page from './components/Page'
import Player from './components/Player'
import Timetable from './components/Timetable'
import orange from './themes/orange'

const GlobalStyle = createGlobalStyle`
  ${p => p.theme.global}
`

const Content = styled.article`
  ${block}
`

const NavCollapse = styled(Collapse)`
  grid-area: navigation;
  
  & ${LinksOnlyMobile} {
    margin-bottom: 1rem;
  }
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
        <NavCollapse
          collapsed={!navToggled}
          maxSize="var(--nav-mobile-max-height)"
          transitionDuration="0.5s"
          transformOrigin="bottom"
          collapsedCss="transform: scale(0.97); opacity: 0"
          uncollapsedTransform="transform: scale(1); opacity: 1"
          transitionProperty="opacity"
        >
          <Navigation />
          <LinksOnlyMobile />
        </NavCollapse>
        <Player />
        <Timetable />
        <Content>lorem ipsum etc</Content>
        <LinksNoMobile />
      </Page>
    </ThemeProvider>
  )
}

export default App
