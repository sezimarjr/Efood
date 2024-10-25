import styled from 'styled-components'
import { cores } from '../../styles'
import lixeira from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  background-color: ${cores.laranja};
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;
  z-index: 1;
`
export const CartItem = styled.div`
  display: flex;
  padding: 8px 8px 12px 8px;
  position: relative;
  background-color: #ffebd9;
  color: ${cores.laranja};
  margin-bottom: 16px;

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }
  p {
    font-size: 14px;
    font-family: 400;
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    bottom: 16px;
    right: 16px;
  }
`
export const Precos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #ffebd9;
  font-size: 14px;
  font-weight: bold;
  margin-top: 24px;
  margin-bottom: 16px;
`

export const CartButton = styled.button`
  display: block;
  background-color: #ffebd9;
  max-width: 100%;
  width: 100%;
  border: none;
  padding: 4px 0;
  cursor: pointer;
  color: ${cores.laranja};
  font-size: 14px;
  font-weight: bold;
`
