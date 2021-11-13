import * as React from 'react'
import ReactDOM from 'react-dom'
import styled from '@emotion/styled'
import { ArrowUp } from 'react-feather'
import clsx from 'clsx'
import { Colors } from '../../styles/colors'

const IconButton = styled.i`
  position: fixed;
  right: 16px;
  bottom: 16px;
  width: 36px;
  height: 36px;

  cursor: pointer;
  border-radius: 50%;
  color: ${Colors.White};
  background: ${Colors.LightYellow};

  &:hover {
    background: ${Colors.Yellow};
  }

  & > * {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

interface Props {
  hide?: boolean
  onClick?: () => void
}

export const TopNavigator: React.FC<Props> = ({ hide, onClick }) => {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    setMounted(true)
  }, [])

  const el = (
    <IconButton onClick={onClick} className={clsx(hide && 'hide')}>
      <ArrowUp size={24} />
    </IconButton>
  )

  return <>{mounted && ReactDOM.createPortal(el, document.body)}</>
}
