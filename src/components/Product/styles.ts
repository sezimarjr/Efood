import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  background-color: ${cores.laranja};
  color: #ffebd9;
  padding: 8px;
  margin-bottom: 32px;
`
export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 14px;
    line-height: 22px;
  }
`

export const ProductTitle = styled.h2`
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 8px;
  font-weight: bold;
`

export const ProductButton = styled.button`
  display: block;
  background-color: #ffebd9;
  color: ${cores.laranja};
  border: none;
  padding: 4px;
  cursor: pointer;
  margin-top: 8px;
  font-weight: bold;
`
