import * as React from 'react'
import styled from '@emotion/styled'
import { isMobile } from 'react-device-detect'
import { ScrollNavigator } from './global/ScrollNavigator'
import { TopNavigator } from './global/TopNavigator'
import { useScrollY } from '../contexts/scroll'

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

  const [pageNum, setPageNum] = React.useState(0)
  React.useEffect(() => {
    setPageNum(ref.current?.children.length ?? 0)
  }, [children])

  const scrollY = useScrollY()
  const [page, setPage] = React.useState(0)
  React.useEffect(() => {
    if (!ref.current) {
      return
    }

    for (let i = 0; i < pageNum; i += 1) {
      const rect = ref.current.children[i].getBoundingClientRect()
      const mid = (rect.top + rect.bottom) / 2
      if (mid > 0) {
        setPage(i)
        break
      }
    }
  }, [scrollY, pageNum])

  const onNext = () => {
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
      {!isMobile && <ScrollNavigator onClick={onNext} hide={page === pageNum - 1} />}
      {page > 0 && <TopNavigator onClick={toTop} />}
    </>
  )
}
