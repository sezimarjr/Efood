import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.laranja};
  padding: 6px 4px;
  font-weight: bold;
  font-size: 12px;
  display: inline-block;
  color: #ffebd9;
`
