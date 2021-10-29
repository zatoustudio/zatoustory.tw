import * as React from 'react'
import { useLoop } from '../hooks/loop'
import { isEqualSize, Size } from '../models/size'

export const ScreenSizeContext = React.createContext<Size>({
  width: 0,
  height: 0,
})

export const useScreenSize = () => React.useContext(ScreenSizeContext)

export const ScreenSizeProvider: React.FC = ({ children }) => {
  const [screenSize, setScreenSize] = React.useState<Size>({ width: 0, height: 0 })
  const reset = () => {
    const newSize = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    if (!isEqualSize(screenSize, newSize)) {
      setScreenSize(newSize)
    }
  }

  useLoop(reset)

  return <ScreenSizeContext.Provider value={screenSize}>{children}</ScreenSizeContext.Provider>
}
