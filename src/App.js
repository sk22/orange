import { useState } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Page from './components/Page'
import Player from './components/Player'
import theme from './themes'

const GlobalStyle = createGlobalStyle`
  ${p => p.theme.global}
`

const App = () => {
  const [navToggled, setNavToggled] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Page>
        <Header
          onToggleNav={() => setNavToggled(!navToggled)}
          navToggled={navToggled}
        />
        <Navigation toggled={navToggled} />
        <Player />
      </Page>
    </ThemeProvider>
  )
}

export default App
