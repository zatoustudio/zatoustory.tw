import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'
import '../styles/normalize'

import Header from '../components/Header'
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'
import { ScreenSizeProvider } from '../contexts/sizes'
import { ScrollYProvider } from '../contexts/scroll'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

const IndexLayout: React.FC = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query IndexLayoutQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={(data: StaticQueryProps) => (
        <ScrollYProvider>
          <ScreenSizeProvider>
            <LayoutRoot>
              <Helmet
                title={data.site.siteMetadata.title}
                meta={[
                  { name: 'description', content: data.site.siteMetadata.description },
                  { name: 'keywords', content: data.site.siteMetadata.keywords },
                ]}
                link={[
                  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'true' },
                  {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap',
                  },
                ]}
              />
              <LayoutMain>{children}</LayoutMain>
            </LayoutRoot>
          </ScreenSizeProvider>
        </ScrollYProvider>
      )}
    />
  )
}

export default IndexLayout
