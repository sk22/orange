import { useState } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { block } from './components/Block'
import Header from './components/Header'
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
        <Navigation toggled={navToggled} />
        <Player />
        <Timetable />
        <Content>lorem ipsum etc</Content>
      </Page>
    </ThemeProvider>
  )
}

export default App
