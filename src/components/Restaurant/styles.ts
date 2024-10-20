import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  position: relative;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: ${cores.laranja};
  color: ${cores.laranja};
  margin-bottom: 48px;

  background-color: #fff;
  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Content = styled.div`
  padding: 8px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Descricao = styled.p`
  font-size: 14px;
  margin-top: 16px;
  margin-bottom: 16px;
`
export const Rating = styled.div`
  display: flex;
  column-gap: 8px;

  h2 {
    font-size: 18px;
    font-weight: bold;
  }
`

export const TitleContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-size: 18px;
  }
`

export const Button = styled(Link)`
  background-color: ${cores.laranja};
  color: #ffebd9;
  padding: 4px 6px;
  border: none;
  font-size: 14px;
  cursor: pointer;
`
