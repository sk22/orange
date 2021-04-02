import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Header from './components/Header'
import MiniPlayer from './components/MiniPlayer'
import Navigation from './components/Navigation'
import Page from './components/Page'
import { light } from './themes'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    ${p => p.theme.root}
  }

  html {
    background: var(--backdrop);
  }

  body {
    margin: 0;
    padding: 0;
  }
`

const App = () => (
  <ThemeProvider theme={light}>
    <GlobalStyle />
    <Page>
      <Header />
      <Navigation />
      <MiniPlayer />
    </Page>
  </ThemeProvider>
)

export default App
