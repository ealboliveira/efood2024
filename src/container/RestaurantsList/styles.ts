import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonLink } from '../../components/Button/styles'

export const Card = styled.div`
  position: relative;
  width: calc(50% - 16px);
  margin: 0 8px 16px 0;
  border: 1px solid ${colors.lightPink};
  > img {
    max-width: 100%;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
  ${ButtonLink} {
    margin: 0 0 8px 8px;
  }
`
export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Infos = styled.div`
  color: ${colors.lightPink};
`
export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  font-size: 18px;
  font-weight: bold;
  align-items: center;
  h2 {
    font-size: 18px;
  }
  p {
    margin-right: 8px;
  }
  div {
    display: flex;
  }
`
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 16px 8px;
`
