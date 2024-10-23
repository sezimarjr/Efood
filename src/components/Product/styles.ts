import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  background-color: ${cores.laranja};
  color: #ffebd9;
  padding: 8px;
  margin-bottom: 32px;

  > img {
    width: 100%;
    height: 170px;
    object-fit: cover;
  }
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
  text-decoration: none;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  justify-content: center;
  align-items: center;

  &.visible {
    display: flex;
  }
`

export const ModalContent = styled.div``
