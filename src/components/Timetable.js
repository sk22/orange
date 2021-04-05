import { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { getDayFormatted, getTimeFromDateString } from '../service/utils'
import Card from './Card'
import Link from './Link'
import Loading from './Loading'
import { progInfo } from '../service/api'

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

const TimetableLoading = styled(Loading)`
  /* TODO: make prettier */
  padding: 1rem;
`

export const RawTimetable = ({ currentProgram, ...props }) => {
  const [dailyPrograms, setDailyPrograms] = useState([])

  const fetchDailyProgram = async () => {
    const date = new Date()
    const today = await progInfo.daily(getDayFormatted(date))
    date.setDate(date.getDate() + 1)
    const tomorrow = await progInfo.daily(getDayFormatted(date))
    setDailyPrograms([...today, ...tomorrow])
  }

  useEffect(() => {
    fetchDailyProgram()
  }, [])

  if (!currentProgram || dailyPrograms.length < 1) return <TimetableLoading />

  const currentProgramIndex = dailyPrograms.reduce((pre, item, index) => {
    if (currentProgram.start === item.start) return index
    else return pre
  }, null)

  const now = new Date().getTime()
  const closestNextProgram = dailyPrograms.reduce(
    (closestIndex, item, index) => {
      const itemTime = new Date(item.start).getTime()
      const closestTime =
        closestIndex === null
          ? null
          : new Date(dailyPrograms[closestIndex].start).getTime()
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
    .filter(i => dailyPrograms[i])

  return (
    <StyledRawTimetable {...props}>
      {nextProgramIndices.map(i => (
        <TimetableItem key={i} current={i === currentProgramIndex}>
          <Time
            title={`${getTimeFromDateString(
              dailyPrograms[i].start
            )} bis ${getTimeFromDateString(dailyPrograms[i].end)}`}
          >
            {getTimeFromDateString(dailyPrograms[i].start)}
          </Time>
          <Name title={dailyPrograms[i].summary}>
            <Link
              href={
                dailyPrograms[i].slug
                  ? `https://o94.at/programm/sendereihen/${dailyPrograms[i].slug}`
                  : `https://o94.at/programm/sendereihen/id/${dailyPrograms[i].id}`
              }
            >
              {dailyPrograms[i].title}
            </Link>
          </Name>
          <EpisodeDescription>
            <Link
              href={`https://o94.at/programm/sendung/id/${dailyPrograms[i].emission_ID}`}
            >
              {dailyPrograms[i].note_title}
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
