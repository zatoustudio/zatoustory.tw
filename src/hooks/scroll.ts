import * as React from 'react'
import { scrollDelay } from '../styles/variables'

export const useScrollPage = (pageNum: number, ref: React.RefObject<HTMLElement>): number => {
  const [current, setCurrent] = React.useState(0)
  const scrolling = React.useRef(false)

  React.useEffect(() => {
    const handler = (e: WheelEvent) => {
      e.preventDefault()

      if (scrolling.current) {
        return
      }

      scrolling.current = true

      let nextPage = current
      if (e.deltaY > 0) {
        nextPage = Math.min(pageNum - 1, current + 1)
      } else {
        nextPage = Math.max(0, current - 1)
      }

      if (nextPage !== current) {
        const target = ref.current?.children[nextPage]
        if (target) {
          target.scrollIntoView()
          setCurrent(nextPage)
        }
      }

      setTimeout(() => {
        scrolling.current = false
      }, scrollDelay)
    }

    window.addEventListener('wheel', handler)
    return () => window.removeEventListener('wheel', handler)
  }, [current])

  return current
}
