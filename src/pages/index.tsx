import * as React from 'react'
import styled from '@emotion/styled'
import IndexLayout from '../layouts'
import { ScreenSizeContainer } from '../components/ScreenSizeContainer'
import { useScrollPage } from '../hooks/scroll'
import { scrollDelay } from '../styles/variables'

interface Page {
  anchor: string
  ref: React.RefObject<HTMLDivElement>
}

const pages = ['page1', 'page2', 'page3'] as const

const PageContainer = styled.div`
  transition: transform ${scrollDelay}ms;
`

const IndexPage = () => {
  const indexRef = React.createRef<HTMLDivElement>()
  const pageRefs: Page[] = pages.map(page => ({
    anchor: page,
    ref: React.createRef<HTMLDivElement>(),
  }))

  const currentPage = useScrollPage(pages.length)

  const [offset, setOffset] = React.useState(0)
  React.useEffect(() => {
    const pageRef = pageRefs[currentPage]
    if (indexRef.current && pageRef.ref.current) {
      const parentRect = indexRef.current.getBoundingClientRect()
      const childRect = pageRef.ref.current.getBoundingClientRect()
      setOffset(childRect.top - parentRect.top)
    }
  }, [currentPage])

  return (
    <IndexLayout>
      <PageContainer ref={indexRef} style={{ transform: `translate3d(0, -${offset}px, 0)` }}>
        <ScreenSizeContainer ref={pageRefs[0].ref} background="pink">
          Page 1
        </ScreenSizeContainer>
        <ScreenSizeContainer ref={pageRefs[1].ref} background="brown">
          Page 2
        </ScreenSizeContainer>
        <ScreenSizeContainer ref={pageRefs[2].ref} background="cyan">
          Page 3
        </ScreenSizeContainer>
      </PageContainer>
    </IndexLayout>
  )
}

export default IndexPage
