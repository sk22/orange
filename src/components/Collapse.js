import styled, { css } from 'styled-components'
import { minLaptop } from '../themes/media'

const collapsed = css`
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

const uncollapsed = css`
  ${p =>
    p.origin === 'top'
      ? css`
          margin-top: 0;
        `
      : css`
          margin-bottom: 0;
        `}

  transform: scaleY(1);
`

const StyledCollapse = styled.div`
  overflow: hidden;

  & > * {
    transition-property: margin-${p => p.origin || 'bottom'}, transform;
    transition-duration: ${p => p.duration};
    transition-delay: ${p => p.delay};
    transition-timing-function: ease;
    transform-origin: ${p => p.origin || 'bottom'};

    ${p => (p.collapsed ? collapsed : uncollapsed)}
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

export const MobileCollapse = styled(Collapse)`
  ${minLaptop(css`
    & > * {
      ${p => (p.fallbackCollapsed ? collapsed : uncollapsed)}
    }
  `)}
`

export default Collapse
