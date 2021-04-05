import styled, { css } from 'styled-components'
import { getTimeFromDateString } from '../service/utils'
import Card from './Card'
import Link from './Link'
import Loading from './Loading'

const StyledRawTimetable = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
`

const StyledTimetable = styled(Card)`
  padding: 0.5rem 0;
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

export const RawTimetable = ({ currentProgram, dailyProgram, ...props }) => {
  if (!dailyProgram || !currentProgram) return <Loading />

  const currentProgramIndex = dailyProgram.reduce((pre, item, index) => {
    if (currentProgram.start === item.start) return index
    else return pre
  }, null)

  const now = new Date().getTime()
  const closestNextProgram = dailyProgram.reduce(
    (closestIndex, item, index) => {
      const itemTime = new Date(item.start).getTime()
      const closestTime =
        closestIndex === null
          ? null
          : new Date(dailyProgram[closestIndex].start).getTime()
      return itemTime > now && (closestTime === null || itemTime < closestTime)
        ? index
        : closestIndex
    },
    null
  )

  const firstNextProgramEntry =
    currentProgramIndex === null ? closestNextProgram : currentProgramIndex
  const nextProgramIndices = Array(6)
    .fill(currentProgramIndex > 0 ? -1 : 0)
    .map((add, i) => firstNextProgramEntry + add + i)

  return (
    <StyledRawTimetable {...props}>
      {nextProgramIndices.map(i => (
        <TimetableItem key={i} current={i === currentProgramIndex}>
          <Time>{getTimeFromDateString(dailyProgram[i].start)}</Time>
          <Name title={dailyProgram[i].summary}>
            <Link
              href={
                dailyProgram[i].slug
                  ? `https://o94.at/programm/sendereihen/${dailyProgram[i].slug}`
                  : `https://o94.at/programm/sendereihen/id/${dailyProgram[i].id}`
              }
            >
              {dailyProgram[i].title}
            </Link>
          </Name>
          <EpisodeDescription>
            <Link
              href={`https://o94.at/programm/sendung/id/${dailyProgram[i].emission_ID}`}
            >
              {dailyProgram[i].note_title}
            </Link>
          </EpisodeDescription>
        </TimetableItem>
      ))}
    </StyledRawTimetable>
  )
}

const Timetable = props => (
  <StyledTimetable {...props}>
    <RawTimetable {...props} />
  </StyledTimetable>
)

export default Timetable
