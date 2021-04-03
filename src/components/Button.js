import styled, { css } from 'styled-components'

export const RoundButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--round-button-size);
  height: var(--round-button-size);
  
  ${p =>
    p.small &&
    css`
      width: var(--round-button-size-small);
      height: var(--round-button-size-small);
    `}

  border-radius: 100%;
  border: var(--separator-width) solid var(--separator-color);
  background: transparent;
  transition-property: background-color, border-color;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  color: inherit;

  &:hover,
  &:focus {
    background: var(--separator-color);
  }

  &:focus {
    border: var(--separator-width) solid var(--primary);
  }
`
