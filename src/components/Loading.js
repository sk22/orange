import styled from 'styled-components'

const StyledLoading = styled.span`
  font-style: italic;
`

const Loading = props => <StyledLoading {...props}>Loading…</StyledLoading>

export default Loading
