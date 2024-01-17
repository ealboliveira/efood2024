// styles.ts
import styled from 'styled-components'

export const List = styled.ul<{ isProfilePage: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr ${({ isProfilePage }) =>
      isProfilePage ? '1fr' : ''};
  margin-top: 58px;
  margin-bottom: 120px;
  gap: 32px;
`
