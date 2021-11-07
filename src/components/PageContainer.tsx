import * as React from 'react'
import ReactDOM from 'react-dom'
import styled from '@emotion/styled'
import { ChevronDown } from 'react-feather'
import { isMobile } from 'react-device-detect'

const ScrollNavigator = styled.i`
  position: fixed;
  left: 50%;
  bottom: 10px;
  transform: translate(-50%, 0);

  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
`

const StyledContainer = styled.div``

export const PageContainer: React.FC = ({ children, ...props }) => {
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

  const onNext = () => {
    const pageNum = ref.current?.children.length ?? 0
    const nextPage = Math.min(page + 1, pageNum - 1)
    const target = ref.current?.children[nextPage]
    if (nextPage !== page && target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const portal = ReactDOM.createPortal(
    <ScrollNavigator onClick={onNext}>
      SCROLL
      <ChevronDown size={36} />
    </ScrollNavigator>,
    document.body
  )

  return (
    <>
      <StyledContainer {...props} ref={ref}>
        {children}
      </StyledContainer>
      {!isMobile && portal}
    </>
  )
}
