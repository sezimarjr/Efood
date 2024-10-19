import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderImagem = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    padding-top: 64px;
    padding-bottom: 40px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`

export const HeaderTitle = styled.h1`
  color: ${cores.laranja};
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
`
