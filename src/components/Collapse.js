import styled, { css } from 'styled-components'
import { minLaptop } from '../themes/media'

const collapsed = css`
  ${p =>
    p.transformOrigin
      ? css`
          margin-${p.transformOrigin}: calc(-1 * ${p => p.maxSize});
        `
      : css`
          margin-bottom: calc(-1 * ${p => p.maxSize});
        `};

  transform: scaleY(0);

  ${p => p.collapsedCss}
`

const uncollapsed = css`
  ${p =>
    p.transformOrigin
      ? css`
          margin-${p.transformOrigin}: 0;
        `
      : css`
          margin-bottom: 0;
        `}

  transform: scaleY(1);

  ${p => p.uncollapsedCss}
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

    ${p => (p.collapsed ? collapsed : uncollapsed)}
  }
`

const Collapse = ({
  collapsed = false,
  maxSize = '10rem',
  transitionDuration = '0.5s',
  transitionDelay = '0',
  transformOrigin = 'bottom',
  transitionProperty,
  collapsedCss = null,
  uncollapsedCss = null,
  children,
  ...props
}) => (
  <StyledCollapse
    {...{
      collapsed,
      maxSize,
      transitionDuration,
      transitionDelay,
      transformOrigin,
      transitionProperty,
      collapsedCss,
      uncollapsedCss,
      ...props
    }}
  >
    <div>{children}</div>
  </StyledCollapse>
)

export const MobileCollapse = styled(Collapse)`
  ${minLaptop(css`
    & > * {
      ${p =>
        p.fallbackCollapsed === undefined || p.fallbackCollapsed === true
          ? collapsed
          : uncollapsed}
    }
  `)}
`

export default Collapse
