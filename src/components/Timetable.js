import styled, { css } from 'styled-components'
import { maxMobile } from '../themes/media'
import Card from './Card'
import Link from './Link'

const StyledTimetable = styled(Card)`
  padding: 0;

  ${maxMobile(css`
    display: none;
  `)}
`

const Time = styled.span`
  grid-area: time;
`
const Name = styled.span`
  grid-area: name;
  font-weight: bold;
`
const EpisodeDescription = styled.span`
  grid-area: episode;
  margin-top: var(--text-block-margin);
`
const TimetableItem = styled.li`
  display: grid;
  padding: 1rem;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  grid-template-areas:
    'time name'
    '. episode';
  grid-template-columns: auto 1fr;
  column-gap: 0.5rem;

  & + & {
    border-top: var(--separator-width) solid var(--separator-color);
  }

  ${p =>
    p.current &&
    css`
      background: var(--primary);
      color: white;
      ${Link} {
        border-bottom-color: var(--primary-link-border-color);
      }
      ${Link}:hover, ${Link}:focus {
        border-bottom-width: var(--primary-link-border-width);
      }
    `}
`
const StyledRawTimetable = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0;
  font-size: 0.9rem;
`

export const RawTimetable = props => (
  <StyledRawTimetable {...props}>
    <TimetableItem>
      <Time>17:00</Time>
      <Name title="Alternativer Nachrichtendienst">ANDI</Name>
      <EpisodeDescription>ANDI 158</EpisodeDescription>
    </TimetableItem>
    <TimetableItem current>
      <Time>17:30</Time>
      <Name>
        <Link href="https://o94.at/programm/sendereihen/kulturschiene_fr">
          Kulturschiene - Fr
        </Link>
      </Name>
      <EpisodeDescription>
        <Link href="https://o94.at/programm/sendung/id/1846911">
          Brettspiele: Wer kennt den Räuber Hotzenplotz?
        </Link>
      </EpisodeDescription>
    </TimetableItem>
    <TimetableItem>
      <Time>18:00</Time>
      <Name>Radio UFF</Name>
      <EpisodeDescription>Gewaltdynamiken</EpisodeDescription>
    </TimetableItem>
    <TimetableItem>
      <Time>19:00</Time>
      <Name>Dirndlbrand</Name>
    </TimetableItem>
    <TimetableItem>
      <Time>20:00</Time>
      <Name>trotz allem</Name>
      <EpisodeDescription>Aubotanik statt Autobahn</EpisodeDescription>
    </TimetableItem>
    <TimetableItem>
      <Time>21:00</Time>
      <Name>Radio Rhabarber</Name>
      <EpisodeDescription>Es ist wieder Klimacamp!</EpisodeDescription>
    </TimetableItem>
    <TimetableItem>
      <Time>22:00</Time>
      <Name>Awareness</Name>
      <EpisodeDescription>
        Ale X & Lore G - Kalimba is my telephone
      </EpisodeDescription>
    </TimetableItem>
  </StyledRawTimetable>
)

const Timetable = () => (
  <StyledTimetable>
    <RawTimetable />
  </StyledTimetable>
)

export default Timetable
