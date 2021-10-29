import * as React from 'react'

export const useRequestAnimationFrame = (callback: (delta: number) => void): void => {
  const t = React.useRef(new Date().getTime())
  const updateRef = React.useRef(0)

  const updates = () => {
    const now = new Date().getTime()
    const delta = now - t.current
    callback(delta)
    t.current = now

    updateRef.current = requestAnimationFrame(updates)
  }

  React.useEffect(() => {
    updateRef.current = requestAnimationFrame(updates)
    return () => cancelAnimationFrame(updateRef.current)
  }, [])
}

export const useLoop = (callback: () => void, interval = 1000): void => {
  const loopRef = React.useRef<ReturnType<typeof setTimeout>>()

  const loop = () => {
    callback()
    loopRef.current = setTimeout(() => {
      loop()
    }, interval)
  }

  React.useEffect(() => {
    loopRef.current = setTimeout(loop, interval)
    return () => {
      if (loopRef.current) {
        clearTimeout(loopRef.current)
      }
    }
  })
}
