import * as React from 'react'

export const ScrollYContext = React.createContext(0)

export const useScrollY = () => React.useContext(ScrollYContext)

export const ScrollYProvider: React.FC = ({ children }) => {
  const [scrollY, setScrollY] = React.useState(0)
  React.useEffect(() => {
    const handler = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return <ScrollYContext.Provider value={scrollY}>{children}</ScrollYContext.Provider>
}
