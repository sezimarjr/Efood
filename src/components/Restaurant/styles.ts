import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { breakpoints, cores } from '../../styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  position: relative;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: ${cores.laranja};
  color: ${cores.laranja};
  margin-bottom: 48px;
  width: 100%;
  /* max-width: 472px; */
  @media (max-width: ${breakpoints.desktop}) {
    max-width: 600px;
    width: 90%;
    margin: 0 auto 48px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    max-width: 428px;
    width: 90%;
    margin: 0 auto 48px;
  }

  > img {
    object-fit: cover;
    width: 100%;
    height: 220px;
  }

  background-color: #fff;
  ${TagContainer} {
    margin-left: 8px;
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
  text-decoration: none;
`
