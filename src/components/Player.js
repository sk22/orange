import { faAngleDown, faPlay, faStop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { createRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { getTimeFromDateString } from '../service/utils'
import { minDesktop, minTablet, maxMobile } from '../themes/media'
import { RoundButton } from './Button'
import Card from './Card'
import Collapse, { collapseCss, uncollapseCss } from './Collapse'
import Link from './Link'
import Loading from './Loading'
import { RawTimetable } from './Timetable'

const StyledPlayer = styled(Card)`
  padding: 0;
  display: grid;
  grid-template-areas:
    'play-button on-air'
    'play-button show-info'
    'episode-info episode-info'
    'next-up next-up';
  align-items: baseline;
  padding-top: 1rem;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;

  ${minTablet(css`
    grid-template-areas:
      'play-button on-air show-info'
      'play-button episode-info episode-info'
      'next-up next-up next-up';
    grid-template-columns: auto auto 1fr;
  `)}

  ${minDesktop(css`
    padding-bottom: 1rem;
    grid-template-areas:
      'play-button on-air show-info episode-info'
      'play-button next-up next-up next-up';
    grid-template-columns: auto auto auto 1fr;
  `)}
`

const OnAirFont = styled.span`
  margin-top: var(--text-block-margin);
  font-family: 'Arvo';
  text-transform: uppercase;
  font-style: italic;
  border-bottom: 0.13em solid var(--primary);
`

const OnAirInfo = styled.span`
  grid-area: on-air;
  margin-right: 0.5rem;
  margin-bottom: var(--text-block-margin);
  align-self: end;

  ${minTablet(css`
    &::after {
      content: ':';
    }
  `)}

  ${minDesktop(css`
    /* adding margin to keep text centered next to button as episode info
       (2nd row) is smaller */
    margin-top: 0.5rem;
    align-self: baseline;
  `)}
`

const ShowInfo = styled.span`
  grid-area: show-info;
  font-size: 1.1rem;
  align-self: start;

  ${minTablet(css`
    margin-right: 1rem;
    margin-bottom: var(--text-block-margin);
    align-self: end;
  `)}

  ${minDesktop(css`
    margin-right: 0.5rem;
    align-self: baseline;

    ${p =>
      !p.episodeInfoEmpty &&
      css`
        &::after {
          margin-left: 0.5rem;
          content: '—';
        }
      `}
  `)}
`

const OnAirUntil = styled.span`
  margin-left: 0.4rem;
  font-size: 0.9rem;
`

const EpisodeInfo = styled.span`
  grid-area: episode-info;

  ${minDesktop(css`
    font-size: 1.1rem;
    align-self: baseline;
  `)}

  ${minTablet(css`
    margin-right: 1rem;
  `)}

  ${maxMobile(css`
    margin-top: 0.5rem;
    margin-left: 1rem;
    margin-right: 1rem;
  `)}

  &:not(:empty)::before {
    content: '»';
    margin-right: 0.1rem;
  }

  &:not(:empty)::after {
    content: '«';
    margin-left: 0.1rem;
  }
`

const PlayButton = styled(RoundButton)`
  margin-left: 1rem;
  margin-right: 1rem;
  align-self: start;
  grid-area: play-button;

  ${p =>
    p.active &&
    css`
      &,
      &:focus,
      &:hover {
        background: var(--primary);
        color: white;
        box-shadow: var(--box-shadow);
      }
    `}
`

const NextUp = styled.div`
  position: relative;
  grid-area: next-up;
  min-height: 1.5rem;
  margin-top: 1rem;
  border-top: var(--separator-width) solid var(--separator-color);

  ${minDesktop(css`
    margin: 0;
    padding: 0;
    border: none;
  `)}
`

const CollapseButton = styled(RoundButton)`
  margin: 0.8rem;
  transition: 0.3s transform ease;
  align-self: start;

  ${p =>
    p.timetableVisible &&
    css`
      transform: rotate(180deg);
    `}

  ${minDesktop(css`
    display: none;
  `)}
`

const NextUpLine = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 0;
  min-height: 3rem;

  ${minDesktop(css`
    min-height: 0;
    padding: 0;
  `)}
`

const NextUpText = styled.div`
  padding: 1rem;
  font-size: 0.9rem;
  font-style: italic;

  ${minDesktop(css`
    padding: 0;
  `)}
`

const TimetableLinkText = styled.div`
  padding: 0.5rem 1rem;
  font-size: 1rem;
`

const GridTextCollapse = styled(Collapse)`
  grid-area: 1 / 1 / 1 / 1;

  /* TODO: uncollapse on focus */
  ${p => p.identifier === 'NextUpText' && minDesktop(uncollapseCss)}
  ${p => p.identifier === 'TimetableLinkText' && minDesktop(collapseCss)}
`

const ShowInfoLoading = styled(Loading)`
  margin-bottom: var(--text-block-margin);
  align-self: end;
`

const TimetableCollapse = styled(Collapse)`
  ${minDesktop(collapseCss)}
`

const PlayerTimetable = styled(RawTimetable)``

const Player = ({ currentProgram, ...props }) => {
  const audioRef = createRef()
  const [playing, setPlaying] = useState(false)
  const [timetableVisible, setTimetableVisible] = useState(false)

  const togglePlayback = () => {
    if (audioRef.current.paused) {
      setPlaying(true)
      audioRef.current.load()
      audioRef.current.play()
    } else {
      setPlaying(false)
      audioRef.current.pause()
    }
  }

  const toggleTimetable = () => {
    setTimetableVisible(!timetableVisible)
  }

  const next =
    (currentProgram && currentProgram.nextup && currentProgram.nextup[0]) ||
    null

  return (
    <StyledPlayer {...props}>
      <audio ref={audioRef}>
        {playing && (
          <source
            src="https://securestream.o94.at/live.mp3"
            type="audio/mpeg"
          />
        )}
      </audio>
      <PlayButton
        onClick={togglePlayback}
        active={playing}
        title={playing ? 'Wiedergabe stoppen' : 'Wiedergabe starten'}
        big
      >
        <FontAwesomeIcon icon={playing ? faStop : faPlay} />
      </PlayButton>

      <OnAirInfo>
        <OnAirFont>On Air</OnAirFont>
        {currentProgram?.end && (
          <OnAirUntil>
            bis {getTimeFromDateString(currentProgram.end)}
          </OnAirUntil>
        )}
      </OnAirInfo>
      {currentProgram ? (
        <ShowInfo
          episodeInfoEmpty={!currentProgram?.meta && !currentProgram.note_title}
        >
          {currentProgram.show || currentProgram.meta ? (
            <Link
              href={`https://o94.at/programm/${
                currentProgram.show
                  ? `sendereihen/id/${currentProgram.show}`
                  : 'Musiktracker_in-random-order'
              }`}
            >
              {currentProgram.name}
            </Link>
          ) : (
            currentProgram.name
          )}
        </ShowInfo>
      ) : (
        <ShowInfoLoading />
      )}
      <EpisodeInfo>
        {/* <Link href="https://o94.at/programm/sendung/id/1846911"> */}
        {currentProgram?.meta ? (
          <>
            {currentProgram.meta.song || 'unknown'}
            {currentProgram.meta.artist && <> — {currentProgram.meta.artist}</>}
          </>
        ) : (
          currentProgram?.note_title
        )}
      </EpisodeInfo>
      <NextUp>
        <NextUpLine>
          <GridTextCollapse
            maxSize="1rem"
            transitionDuration="0.5s"
            transformOrigin="top"
            collapsed={timetableVisible}
            identifier="NextUpText"
          >
            {next && (
              <NextUpText>
                ab {getTimeFromDateString(next.start)}: {next.name}
                {next.note_title && <> – {next.note_title}</>}
              </NextUpText>
            )}
          </GridTextCollapse>
          <GridTextCollapse
            maxSize="1rem"
            transitionDuration="0.5s"
            transformOrigin="top"
            collapsed={!timetableVisible}
            identifier="TimetableLinkText"
          >
            <TimetableLinkText>
              <Link href="https://o94.at/de/programm/programm-uebersicht">
                Programm für {new Date().toLocaleDateString('de-AT')}
              </Link>
            </TimetableLinkText>
          </GridTextCollapse>
          <CollapseButton
            small
            onClick={toggleTimetable}
            timetableVisible={timetableVisible}
            title={
              timetableVisible ? 'Programm einklappen' : 'Programm ausklappen'
            }
          >
            <FontAwesomeIcon icon={faAngleDown} />
          </CollapseButton>
        </NextUpLine>
        <TimetableCollapse
          maxSize="40rem"
          transitionDuration="0.7s"
          collapsed={!timetableVisible}
        >
          {currentProgram && (
            <PlayerTimetable currentProgram={currentProgram} />
          )}
        </TimetableCollapse>
      </NextUp>
    </StyledPlayer>
  )
}

export default Player
