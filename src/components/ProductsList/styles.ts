import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Links = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  margin-top: 56px;
  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    place-items: center;
  }
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`
