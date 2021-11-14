import * as React from 'react'
import styled from '@emotion/styled'
import { AlertTriangle, Facebook, Instagram, Twitter } from 'react-feather'
import { Colors } from '../../styles/colors'
import { socialLinks } from '../../styles/variables'
import { AlternativeTitle } from '../AlternativeTitle'

const Bracket = styled.div<{ size: number }>`
  width: ${p => p.size}px;
  max-width: calc(100% - 16px);
  height: ${p => p.size}px;
  padding: 16px;

  cursor: default;
  border: 5px solid ${Colors.Purple};
  border-radius: 8px;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${Colors.White};
    border-radius: 8px;
    width: 100%;
    height: 100%;
    background: ${Colors.Purple};
    gap: 16px;
  }
`

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

  & > a {
    cursor: pointer;

    display: block;
    position: relative;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid ${Colors.White};
    color: ${Colors.White};

    transition: transform 251ms ease;
    &:hover {
      transform: scale(1.2);
    }

    & > * {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
`

export const Entry: React.FC = () => (
  <Bracket size={500}>
    <div>
      <AlertTriangle size={120} />
      <AlternativeTitle>
        <h1>鯨魚島故事館</h1>
        <h1>Zatou Story</h1>
      </AlternativeTitle>
      <SocialLinks>
        <a href={socialLinks.instagram} target="_blank" rel="noreferrer">
          <Instagram size={24} />
        </a>
        <a href={socialLinks.twitter} target="_blank" rel="noreferrer">
          <Twitter size={24} />
        </a>
        <a href={socialLinks.facebook} target="_blank" rel="noreferrer">
          <Facebook size={24} />
        </a>
      </SocialLinks>
    </div>
  </Bracket>
)
