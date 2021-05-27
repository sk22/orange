import styled from 'styled-components'
import Link from './Link'

const TimetableLinkText = styled.div`
  padding: 0.5rem 1rem;
  font-size: 1rem;
`

const ProgramLink = props => (
  <TimetableLinkText {...props}>
    <Link href="https://o94.at/de/programm/programm-uebersicht">
      Programm für {new Date().toLocaleDateString('de-AT')}
    </Link>
  </TimetableLinkText>
)

export default ProgramLink
