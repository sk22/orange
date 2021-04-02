import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { createRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { desktop, laptop, mobile } from '../themes/media'
import Block from './Block'
import { RoundButton } from './Button'
import Card from './Card'
import Link from './Link'

const LiveInfo = styled.div`
  display: grid;
  grid-template-areas:
    'play-button on-air'
    'play-button show-info'
    'episode-info episode-info'
    'next-up next-up';
  align-items: baseline;
  padding-top: 1rem;
  padding-bottom: 1rem;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;

  ${laptop(css`
    grid-template-areas:
      'play-button on-air show-info'
      'play-button episode-info episode-info'
      'next-up next-up next-up';
    grid-template-columns: auto auto 1fr;
  `)}

  ${desktop(css`
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

  ${laptop(css`
    &::after {
      content: ':';
    }
  `)}
`

const ShowInfo = styled.span`
  grid-area: show-info;
  font-size: 1.1rem;
  align-self: start;

  ${laptop(css`
    margin-right: 1rem;
    margin-bottom: var(--text-block-margin);
    align-self: end;
  `)}

  ${desktop(css`
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

  ${desktop(css`
    font-size: 1.1rem;
    align-self: end;
    margin-bottom: var(--text-block-margin);
  `)}

  ${laptop(css`
    margin-right: 1rem;
  `)}

  ${mobile(css`
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
  grid-area: next-up;
  font-size: 0.9rem;
  font-style: italic;

  margin-top: 1rem;
  padding: 1rem;
  padding-bottom: 0;
  border-top: var(--separator-width) solid var(--light-gray);

  ${desktop(css`
    margin: 0;
    padding: 0;
    border: none;
  `)}
`

const Player = () => {
  const audioRef = createRef()
  const [playing, setPlaying] = useState(false)

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

  return (
    <Card noPadding>
      <audio ref={audioRef}>
        {playing && (
          <source
            src="https://securestream.o94.at/live.mp3"
            type="audio/mpeg"
          />
        )}
      </audio>
      <LiveInfo>
        <PlayButton onClick={togglePlayback}>
          <FontAwesomeIcon icon={playing ? faStop : faPlay} size="s" />
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
        <NextUp>ab 19:00: Radio UFF – Gewaltdynamiken</NextUp>
      </LiveInfo>
    </Card>
  )
}

export default Player
