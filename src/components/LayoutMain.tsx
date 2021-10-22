import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { graphql, StaticQuery } from 'gatsby'

const StyledLayoutMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`

interface StaticQueryProps {
  file: {
    publicURL: string
  }
}

interface LayoutMainProps {
  className?: string
}

const LayoutMain: React.FC<LayoutMainProps> = ({ children, className }) => (
  <StaticQuery
    query={graphql`
      query BackgroundImageQuery {
        file(base: { eq: "dot-grid.png" }) {
          publicURL
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <StyledLayoutMain
        className={className}
        css={css`
          background: url(${data.file.publicURL});
        `}
      >
        {children}
      </StyledLayoutMain>
    )}
  />
)

export default LayoutMain
