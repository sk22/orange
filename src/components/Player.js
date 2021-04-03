import { faAngleDown, faPlay, faStop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { createRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { minDesktop, minLaptop, maxMobile } from '../themes/media'
import { RoundButton } from './Button'
import Card from './Card'
import Link from './Link'
import { RawTimetable } from './Timetable'

const StyledPlayer = styled(Card)`
  padding: 0;
  grid-area: player;
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

  ${minLaptop(css`
    padding-bottom: 1rem;
    grid-template-areas:
      'play-button on-air show-info'
      'play-button episode-info episode-info'
      'next-up next-up next-up';
    grid-template-columns: auto auto 1fr;
  `)}

  ${minDesktop(css`
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
  margin-top: var(--text-block-margin);
  margin-bottom: var(--text-block-margin);
  align-self: end;

  ${minLaptop(css`
    &::after {
      content: ':';
    }
  `)}
`

const ShowInfo = styled.span`
  grid-area: show-info;
  font-size: 1.1rem;
  align-self: start;

  ${minLaptop(css`
    margin-right: 1rem;
    margin-bottom: var(--text-block-margin);
    align-self: end;
  `)}

  ${minDesktop(css`
    margin-right: 0.5rem;
    &::after {
      margin-left: 0.5rem;
      content: '—';
    }
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
    align-self: end;
    margin-bottom: var(--text-block-margin);
  `)}

  ${minLaptop(css`
    margin-right: 1rem;
  `)}

  ${maxMobile(css`
    margin-top: var(--text-block-margin);
    margin-left: 1rem;
  `)}

  &::before {
    content: '»';
    margin-right: 0.1rem;
  }

  &::after {
    content: '«';
    margin-left: 0.1rem;
  }
`

const PlayButton = styled(RoundButton)`
  margin-left: 1rem;
  margin-right: 1rem;
  grid-area: play-button;
  align-self: center;
`

const NextUp = styled.div`
  position: relative;
  grid-area: next-up;
  /* font-size: 0.9rem; */
  min-height: 1.5rem;

  margin-top: 1.5rem;
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
  ${p =>
    p.timetableVisible &&
    css`
      transform: rotate(180deg);
    `}

  ${minLaptop(
    css`
      display: none;
    `
  )}
`

const NextUpLine = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 0;

  ${maxMobile(css`
    min-height: 3rem;
  `)}

  ${minLaptop(css`
    padding-bottom: 0;
  `)}

  ${minDesktop(css`
    padding: 0;
  `)}
`

const NextUpText = styled.div`
  padding: 1rem;
  font-size: 0.9rem;

  ${minLaptop(
    css`
      padding-bottom: 0;
    `
  )}
  ${minDesktop(css`
    padding: 0;
  `)}
  font-style: italic;
`

const TimetableLinkText = styled.div`
  /* padding: 1rem; */
  padding: 0.5rem 1rem;
  font-size: 1rem;
`

const StyledCollapse = styled.div`
  overflow: hidden;

  & > * {
    transition-property: margin-${p => p.origin || 'bottom'}, transform;
    transition-duration: ${p => p.duration};
    transition-delay: ${p => p.delay};
    transition-timing-function: ease;
    transform-origin: ${p => p.origin || 'bottom'};

    ${p =>
      p.collapsed
        ? css`
            ${p =>
              p.origin === 'top'
                ? css`
                    margin-top: calc(-1 * ${p => p.maxHeight});
                  `
                : css`
                    margin-bottom: calc(-1 * ${p => p.maxHeight});
                  `};

            transform: scaleY(0);
          `
        : css`
            ${p =>
              p.origin === 'top'
                ? css`
                    margin-top: 0;
                  `
                : css`
                    margin-bottom: 0;
                  `}

            transform: scaleY(1);
          `}
  }
`

const Collapse = ({
  duration,
  delay,
  maxHeight,
  collapsed,
  origin,
  children,
  ...props
}) => (
  <StyledCollapse
    {...{ duration, delay, maxHeight, collapsed, origin, ...props }}
  >
    {children}
  </StyledCollapse>
)

const MobileCollapse = styled(Collapse)`
  ${minLaptop(css`
    & > * {
      ${p =>
        p.fallbackCollapsed
          ? css`
              ${p =>
                p.origin === 'top'
                  ? css`
                      margin-top: calc(-1 * ${p => p.maxHeight});
                    `
                  : css`
                      margin-bottom: calc(-1 * ${p => p.maxHeight});
                    `};

              transform: scaleY(0);
            `
          : css`
              ${p =>
                p.origin === 'top'
                  ? css`
                      margin-top: 0;
                    `
                  : css`
                      margin-bottom: 0;
                    `}
              transform: scaleY(1);
            `}
    }
  `)}
`

const GridTextCollapse = styled(MobileCollapse)`
  grid-area: 1 / 1 / 1 / 1;
`

const TimetableCollapse = styled(MobileCollapse)`
  ${maxMobile(css`
    ${p =>
      !p.collapsed &&
      css`
        & > * {
          /* cut off timetable's top margin */
          margin-top: -0.5rem;
        }
      `}
  `)}
`

const Player = () => {
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

  return (
    <StyledPlayer noPadding>
      <audio ref={audioRef}>
        {playing && (
          <source
            src="https://securestream.o94.at/live.mp3"
            type="audio/mpeg"
          />
        )}
      </audio>
      <PlayButton onClick={togglePlayback}>
        <FontAwesomeIcon icon={playing ? faStop : faPlay} />
      </PlayButton>
      <OnAirInfo>
        <OnAirFont>On Air</OnAirFont>
        <OnAirUntil>bis 18:00</OnAirUntil>
      </OnAirInfo>
      <ShowInfo>
        <Link href="https://o94.at/programm/sendereihen/kulturschiene_fr">
          Kulturschiene - Fr
        </Link>
      </ShowInfo>
      <EpisodeInfo>
        <Link href="https://o94.at/programm/sendung/id/1846911">
          Brettspiele: Wer kennt den Räuber Hotzenplotz?
        </Link>
      </EpisodeInfo>
      <NextUp>
        <NextUpLine>
          <GridTextCollapse
            maxHeight="1rem"
            duration="0.5s"
            origin="top"
            collapsed={timetableVisible}
            fallbackCollapsed={false}
          >
            <NextUpText>ab 18:00: Radio UFF – Gewaltdynamiken</NextUpText>
          </GridTextCollapse>
          <GridTextCollapse
            maxHeight="1rem"
            duration="0.5s"
            origin="top"
            collapsed={!timetableVisible}
            fallbackCollapsed={true}
          >
            <TimetableLinkText>
              <Link href="https://o94.at/programm/uebersicht?datum=2021-04-02">
                Programm für 02.04.2021
              </Link>
            </TimetableLinkText>
          </GridTextCollapse>
          <CollapseButton
            small
            onClick={toggleTimetable}
            timetableVisible={timetableVisible}
          >
            <FontAwesomeIcon icon={faAngleDown} />
          </CollapseButton>
        </NextUpLine>
        <TimetableCollapse
          maxHeight="40rem"
          duration="0.7s"
          collapsed={!timetableVisible}
          fallbackCollapsed={true}
        >
          <RawTimetable />
        </TimetableCollapse>
      </NextUp>
    </StyledPlayer>
  )
}

export default Player
