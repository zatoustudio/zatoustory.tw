import * as React from 'react'
import IndexLayout from '../layouts'
import { ScreenSizeContainer } from '../components/ScreenSizeContainer'
import { PageContainer } from '../components/PageContainer'
import { Entry } from '../components/top/Entry'
import { News } from '../components/top/News'
import { About } from '../components/top/About'
import { Colors } from '../styles/colors'

const IndexPage = () => {
  return (
    <IndexLayout>
      <PageContainer>
        <ScreenSizeContainer>
          <Entry />
        </ScreenSizeContainer>
        <ScreenSizeContainer background={Colors.Purple}>
          <News />
        </ScreenSizeContainer>
        <ScreenSizeContainer>
          <About />
        </ScreenSizeContainer>
      </PageContainer>
    </IndexLayout>
  )
}

export default IndexPage
