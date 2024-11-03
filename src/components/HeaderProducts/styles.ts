import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const MainHeader = styled.div`
  height: 186px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${cores.laranja};
  font-size: 18px;

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: ${breakpoints.desktop}) {
      justify-content: space-evenly;
    }
  }
`
export const RestaurantHero = styled.div`
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 24px;
  padding-bottom: 32px;
  position: relative;

  &::after {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
  }

  .container {
    height: 100%;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #ffffff;
    font-size: 32px;
    @media (max-width: ${breakpoints.desktop}) {
      padding-left: 40px;
    }
  }
`

export const RestaurantTitle = styled.h3`
  font-weight: 900;
`
export const FoodType = styled.span`
  font-weight: 100;
  line-height: 37px;
  font-style: italic;
  margin-bottom: 156px;
`
