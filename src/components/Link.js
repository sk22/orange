import styled, { css } from 'styled-components'

const unstyledLinkCss = css`
  color: unset;
  text-decoration: none;
`

const linkCss = css`
  ${unstyledLinkCss}
  border-bottom: var(--separator-width) solid var(--link-underline-color);
  transition: 0.2s border-bottom-color ease;

  &:hover {
    border-bottom-color: var(--link-underline-hover-color);
  }
`

export const UnstyledLink = styled.a`
  ${unstyledLinkCss}
`

const Link = styled.a`
  ${linkCss}
`

export default Link
