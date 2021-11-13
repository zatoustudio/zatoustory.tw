import * as React from 'react'
import styled from '@emotion/styled'
import Helmet from 'react-helmet'
import { Colors } from '../../styles/colors'
import { AlternativeTitle } from '../AlternativeTitle'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 16px;
  color: ${Colors.White};
`

const Frame = styled.div`
  width: 420px;
  max-width: calc(100% - 16px);
  height: 500px;
  padding: 16px;
  overflow-y: scroll;

  border: none;

  background: ${Colors.White};
`

export const News: React.FC = () => (
  <Main>
    <AlternativeTitle>
      <h1>最新消息</h1>
      <h1>News</h1>
    </AlternativeTitle>
    <Frame>
      <a className="twitter-timeline" href="https://twitter.com/zatou_studio?ref_src=twsrc%5Etfw">
        Tweets by zatou_studio
      </a>
      <Helmet>
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
      </Helmet>
    </Frame>
  </Main>
)
