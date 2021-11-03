import * as React from 'react'
import styled from '@emotion/styled'
import { heights } from '../styles/variables'

interface Props extends React.HTMLProps<HTMLDivElement> {
  background?: string
}

const StyledContainer = styled.div<Props>`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;

  padding-top: ${heights.header}px;

  ${p => (p.background ? `background: ${p.background};` : '')}
`

export const ScreenSizeContainer = React.forwardRef<HTMLDivElement, Props>((props, ref) => <StyledContainer {...props} ref={ref} />)
