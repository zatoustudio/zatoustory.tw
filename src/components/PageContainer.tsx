import * as React from 'react'
import styled from '@emotion/styled'
import { isMobile } from 'react-device-detect'
import { ScrollNavigator } from './global/ScrollNavigator'
import { TopNavigator } from './global/TopNavigator'

const StyledContainer = styled.div``

export const PageContainer: React.FC = ({ children, ...props }) => {
  const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  /** reset to top */
  React.useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  const ref = React.createRef<HTMLDivElement>()
  const [page, setPage] = React.useState(0)

  React.useEffect(() => {
    const handler = () => {
      const pageNum = ref.current?.children.length ?? 0
      let next = -1
      for (let i = 0; i < pageNum; i += 1) {
        const rect = ref.current?.children[i].getBoundingClientRect()
        if (rect && rect.top > 0) {
          next = i - 1
          break
        }
      }
      setPage(next >= 0 ? next : pageNum - 1)
    }

    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [page])

  const [canScroll, setCanScroll] = React.useState(true)
  React.useEffect(() => {
    const pageNum = ref.current?.children.length ?? 0
    setCanScroll(pageNum - 1 > page)
  }, [page])

  const onNext = () => {
    const pageNum = ref.current?.children.length ?? 0
    const nextPage = Math.min(page + 1, pageNum - 1)
    const target = ref.current?.children[nextPage]
    if (nextPage !== page && target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <StyledContainer {...props} ref={ref}>
        {children}
      </StyledContainer>
      {!isMobile && <ScrollNavigator onClick={onNext} hide={!canScroll} />}
      {page > 0 && <TopNavigator onClick={toTop} />}
    </>
  )
}
