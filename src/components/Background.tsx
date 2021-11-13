/* eslint-disable react/no-array-index-key */
import * as React from 'react'
import clsx from 'clsx'
import styled from '@emotion/styled'
import * as Icons from 'react-feather'
import { keyframes } from '@emotion/core'
import { useScreenSize } from '../contexts/sizes'
import { Position } from '../models/position'
import { Colors } from '../styles/colors'

const bump = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  overflow: hidden;

  & > div {
    position: absolute;
    left: 0;
    top: 0;
  }

  & > div.bump > * {
    animation: ${bump} 3s linear infinite;
  }
`

const icons = [Icons.Star, Icons.Umbrella, Icons.Coffee, Icons.Wind]
const colors = [Colors.Purple, Colors.LightBlue, Colors.Pink, Colors.Yellow]

const blockSize = 200
const iconSize = 36

export const Background: React.FC = () => {
  const screenSize = useScreenSize()
  const row = Math.ceil(screenSize.width / blockSize)
  const col = Math.ceil(screenSize.height / blockSize)
  const positions: Position[] = []
  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < col; j += 1) {
      const pos: Position = {
        x: Math.random() * blockSize + i * blockSize - iconSize,
        y: Math.random() * blockSize + j * blockSize - iconSize,
      }
      positions.push(pos)
    }
  }

  return (
    <Container>
      {positions.map((pos, i) => {
        const Icon = icons[i % icons.length]
        const color = colors[Math.floor(Math.random() * colors.length)]
        const rotate = Math.floor(Math.random() * 360)
        const isBump = Math.random() > 0.9
        return (
          <div key={i} className={clsx(isBump && 'bump')} style={{ transform: `translate(${pos.x}px, ${pos.y}px) rotate(${rotate}deg)` }}>
            <Icon key={i} size={iconSize} color={color} />
          </div>
        )
      })}
    </Container>
  )
}
