/* eslint-disable max-len */
import * as React from 'react'
import styled from '@emotion/styled'
import { Colors } from '../../styles/colors'
import { AlternativeTitle } from '../AlternativeTitle'

const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 16px;
`

const Main = styled.div`
  width: 500px;
  max-width: 100%;

  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 16px;
  color: ${Colors.Purple};
`

const Frame = styled.div`
  width: 100%;
  padding: 32px;

  border: none;
  border-radius: 8px;

  color: ${Colors.White};
  background: ${Colors.Purple};
`

export const About: React.FC = () => (
  <Container>
    <Main>
      <AlternativeTitle>
        <h1>關於我們</h1>
        <h1>About Us</h1>
      </AlternativeTitle>
      <Frame>
        鯨魚島故事館有限公司致力於經營VTuber（虛擬主播）以及多媒體創意內容的輸出，協助多位創作者進行媒合，尋找適合的魂（表演者），讓虛擬角色能夠以新的形式帶給大家歡樂。
        <br />
        <br />
        目的在於終結繪師、模型師只能獨自接案，單打獨鬥又削價競爭的文創市場！也讓有心成為VTuber的人們有個可以展現自我的舞台，讓鯨魚島幫你打點好一切！不再需要個別委託繪師和模型師，一來一往心力交瘁便沒有精力好好經營直播。
        <br />
        <br />
        取用「鯨魚」的形象是源自牠們能夠穿越各類海洋、悠遊大海。雖然眼睛看不太到，但能夠以聲波來確認附近的生物跟地形——這一點跟觀看VTuber是很類似的——當大家都是以虛擬角色登場時，觀眾會更在乎表演者本身能端出什麼，就由聲音的魅力跟觀眾產生連結。「島」主要是將鯨魚的外型做衍生，在背上建造「故事館」，從VTuber那裡搜集各種體驗，化為實體的故事書，收納在其中，構成「鯨魚島故事館」的全貌。
      </Frame>
    </Main>
  </Container>
)
