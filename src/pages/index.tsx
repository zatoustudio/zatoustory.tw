import * as React from 'react'
import IndexLayout from '../layouts'
import { ScreenSizeContainer } from '../components/ScreenSizeContainer'
import { PageContainer } from '../components/PageContainer'

const IndexPage = () => {
  return (
    <IndexLayout>
      <PageContainer>
        <ScreenSizeContainer>Page 1</ScreenSizeContainer>
        <ScreenSizeContainer>Page 2</ScreenSizeContainer>
        <ScreenSizeContainer>Page 3</ScreenSizeContainer>
      </PageContainer>
    </IndexLayout>
  )
}

export default IndexPage
