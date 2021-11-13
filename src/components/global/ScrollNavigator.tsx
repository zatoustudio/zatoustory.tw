import * as React from 'react'
import ReactDOM from 'react-dom'
import styled from '@emotion/styled'
import { ChevronDown } from 'react-feather'
import { keyframes } from '@emotion/core'
import clsx from 'clsx'

const moveDown = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(25%);
  }
`

const Container = styled.i`
  position: fixed;
  left: 50%;
  bottom: 10px;
  transform: translate(-50%, 0);

  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;

  &:hover {
    font-weight: bold;
    & > * {
      animation: ${moveDown} 751ms infinite;
    }
  }

  transition: opacity 251ms ease;
  opacity: 1;
  &.hide {
    opacity: 0;
  }
`

interface Props {
  hide?: boolean
  onClick?: () => void
}

export const ScrollNavigator: React.FC<Props> = ({ hide, onClick }) => {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    setMounted(true)
  }, [])

  const el = (
    <Container onClick={onClick} className={clsx(hide && 'hide')}>
      SCROLL
      <ChevronDown size={36} />
    </Container>
  )

  return <>{mounted && ReactDOM.createPortal(el, document.body)}</>
}
