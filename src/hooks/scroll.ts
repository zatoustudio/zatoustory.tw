import * as React from 'react'
import { scrollDelay } from '../styles/variables'

export const useScrollPage = (pageNum: number): number => {
  const [current, setCurrent] = React.useState(0)
  const scrolling = React.useRef(false)

  React.useEffect(() => {
    const handler = (e: WheelEvent) => {
      if (scrolling.current) {
        return
      }

      scrolling.current = true
      if (e.deltaY > 0) {
        setCurrent(Math.min(pageNum - 1, current + 1))
      } else {
        setCurrent(Math.max(0, current - 1))
      }

      setTimeout(() => {
        scrolling.current = false
      }, scrollDelay)
    }

    window.addEventListener('wheel', handler, { passive: true })
    return () => window.removeEventListener('wheel', handler)
  }, [current])

  return current
}
