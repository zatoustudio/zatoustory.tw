import styled from '@emotion/styled'
import { centering } from '../styles/utils'

export const AlternativeTitle = styled.div`
  cursor: default;
  position: relative;
  width: fit-content;

  white-space: nowrap;

  & > *:nth-of-type(1) {
    transition: opacity 251ms ease-in-out;
    opacity: 1;
  }
  & > *:nth-of-type(2) {
    position: absolute;
    transition: opacity 251ms ease-in-out;
    ${centering}
    opacity: 0;
  }

  &:hover {
    & > *:nth-of-type(1) {
      opacity: 0;
    }
    & > *:nth-of-type(2) {
      opacity: 1;
    }
  }

  & > *:nth-of-type(1n + 3) {
    display: none;
  }
`
