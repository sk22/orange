import styled from 'styled-components'

export const RoundButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 100%;
  border: var(--separator-width) solid var(--light-gray);
  background: transparent;
  transition-property: background-color, border-color;
  transition-duration: 0.3s;
  transition-timing-function: ease;

  &:hover,
  &:focus {
    background: var(--light-gray);
  }

  &:focus {
    border: var(--separator-width) solid var(--primary);
  }
`
