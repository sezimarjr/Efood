import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Container = styled.div`
  background-color: ${cores.laranja};
  color: #ffebd9;
  padding: 8px;
  margin-bottom: 32px;
  @media (max-width: ${breakpoints.desktop}) {
    max-width: 350px;
  }

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

  display: none;
  justify-content: center;
  align-items: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const ModalContent = styled.div`
  background-color: ${cores.laranja};
  color: #ffffff;
  padding: 32px;
  max-width: 1024px;
  position: relative;
  z-index: 1;
  display: flex;
  gap: 24px;
  @media (max-width: ${breakpoints.desktop}) {
    max-width: 767px;
    width: 90%;
    padding: 16px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

  .close {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
    @media (max-width: ${breakpoints.tablet}) {
      top: 8px;
      right: 8px;
    }
  }

  > img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  .details {
    width: 100%;
    h2 {
      font-size: 18px;
      font-weight: 900;
    }
    p {
      margin: 16px 0;
      font-size: 14px;
      font-weight: 300;
      line-height: 22px;
    }
  }
`

export const Botao = styled.button`
  background-color: #ffebd9;
  color: ${cores.laranja};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  border: none;
  cursor: pointer;
`
