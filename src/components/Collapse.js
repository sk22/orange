import styled, { css } from 'styled-components'

export const collapseCss = css`
  & > * {
    transform: scaleY(0);
    ${p => `margin-${p.transformOrigin || 'bottom'}: calc(-1 * ${p.maxSize})`};
    ${p => p.collapseCss}
  }
`

export const uncollapseCss = css`
  & > * {
    transform: scaleY(1);
    ${p => `margin-${p.transformOrigin || 'bottom'}: 0`};
    ${p => p.uncollapseCss}
  }
`

const StyledCollapse = styled.div`
  overflow: hidden;

  & > * {
    transition-property: ${p =>
      [
        `margin-${p.transformOrigin || 'bottom'}`,
        'transform',
        p.transitionProperty
      ]
        .filter(n => typeof n === 'string' && n.length)
        .join(', ')};
    transition-duration: ${p => p.transitionDuration};
    transition-delay: ${p => p.transitionDelay};
    transform-origin: ${p => p.transformOrigin || 'bottom'};
    transition-timing-function: ease;
  }

  ${p => (p.collapsed ? collapseCss : uncollapseCss)}
`

const Collapse = ({
  collapsed = false,
  maxSize = '10rem',
  transitionDuration = '0.5s',
  transitionDelay = '0',
  transformOrigin = 'bottom',
  transitionProperty,
  collapseCss = null,
  uncollapseCss = null,
  key,
  children,
  ...props
}) => {
  return (
    <StyledCollapse
      {...{
        collapsed,
        maxSize,
        transitionDuration,
        transitionDelay,
        transformOrigin,
        transitionProperty,
        collapseCss,
        uncollapseCss,
        key,
        ...props
      }}
    >
      <div>{children}</div>
    </StyledCollapse>
  )
}

export default Collapse
