import * as React from 'react'
import clsx from 'clsx'
import ReactVisibilitySensor from 'react-visibility-sensor'
import styled from '@emotion/styled'

interface Props extends React.HTMLProps<HTMLDivElement> {
  background?: string
}

const StyledContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  min-height: max(100vh, 768px);

  ${p => (p.background ? `background: ${p.background};` : '')}

  &.hide {
    & > div {
      transform: translate(0, -50%);
      opacity: 0;
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    transition: all 550ms ease;
  }
`

export const ScreenSizeContainer = React.forwardRef<HTMLDivElement, Props>(({ children, ...props }, ref) => {
  const [isVisible, setVisible] = React.useState(false)

  return (
    <ReactVisibilitySensor onChange={setVisible} partialVisibility minTopValue={200}>
      <StyledContainer {...props} ref={ref} className={clsx(!isVisible && 'hide')}>
        <div>{children}</div>
      </StyledContainer>
    </ReactVisibilitySensor>
  )
})
