import styled from 'styled-components'

const Link = styled.a`
  color: unset;
  text-decoration: none;
  border-bottom: var(--separator-width) solid var(--link-underline-color);
  transition: 0.2s border-bottom-color ease;

  &:hover {
    border-bottom-color: var(--link-underline-hover-color);
  }
`

export default Link
