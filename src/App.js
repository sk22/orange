import { useState } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Header from './components/Header'
import MiniPlayer from './components/MiniPlayer'
import Navigation from './components/Navigation'
import Page from './components/Page'
import { light } from './themes'

const GlobalStyle = createGlobalStyle`
  ${p => p.theme.global}
`

const App = () => {
  const [navToggled, setNavToggled] = useState(false)

  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Page>
        <Header
          onToggleNav={() => setNavToggled(!navToggled)}
          navToggled={navToggled}
        />
        <Navigation toggled={navToggled} />
        <MiniPlayer />
      </Page>
    </ThemeProvider>
  )
}

export default App
