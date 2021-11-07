import * as React from 'react'
import ReactVisibilitySensor from 'react-visibility-sensor'
import styled from '@emotion/styled'
import { heights } from '../styles/variables'

interface Props extends React.HTMLProps<HTMLDivElement> {
  background?: string
  onVisibilityChange?: (visible: boolean) => void
}

const StyledContainer = styled.div<Props>`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;

  padding-top: ${heights.header}px;

  ${p => (p.background ? `background: ${p.background};` : '')}
`

export const ScreenSizeContainer = React.forwardRef<HTMLDivElement, Props>(({ onVisibilityChange, ...props }, ref) => (
  <ReactVisibilitySensor onChange={onVisibilityChange} partialVisibility minTopValue={heights.header}>
    <StyledContainer {...props} ref={ref} />
  </ReactVisibilitySensor>
))
