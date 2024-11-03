import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import lixeira from '../../assets/images/lixeira.png'

type RowProps = {
  gap?: string
}
type InputGroupProps = {
  maxWidth?: string
}
type TabButtonProps = {
  marginTop?: string
}

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
  overflow: auto;

  > h3 {
    font-size: 16px;
    font-weight: bold;
    color: #ffebd9;
    margin-bottom: 16px;
  }

  .empty-cart {
    text-align: center;
    color: #ffebd9;
    font-size: 14px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    max-width: 70%;
  }
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

export const InputGroup = styled.div<InputGroupProps>`
  margin-bottom: 8px;
  flex: auto;
  color: #ffebd9;
  font-size: 14px;
  font-weight: bold;
  max-width: ${(props) => props.maxWidth || 'auto'};
  label {
    margin-bottom: 8px;
    display: block;
  }
  input {
    width: 100%;
    height: 32px;
    background-color: #ffebd9;
    border: none;
    color: #4b4b4b;
    font-weight: bold;
    padding: 8px;

    &.error {
      border: 2px solid red;
    }
  }
`
export const Row = styled.div<RowProps>`
  display: flex;
  gap: ${(props) => props.gap || '0'};
  margin-bottom: 8px;
`
export const TabButton = styled.div<TabButtonProps>`
  ${CartButton} {
    margin-bottom: 8px;
  }
  &.margin-top {
    margin-top: ${(props) => props.marginTop || '24px'};
  }
`
export const CheckoutMessage = styled.div`
  color: #ffebd9;
  margin-bottom: 24px;
  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }
  p {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
  }
`
