import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: #ffebd9;
  font-size: 10px;
  color: ${cores.laranja};
  text-align: center;
  margin-top: 80px;
  h2 {
    margin-bottom: 32px;
  }

  .container {
    height: 298px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 40px 0;
  }
`

export const Links = styled.ul`
  display: flex;
  gap: 8px;
`
export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
