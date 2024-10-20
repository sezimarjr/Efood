import styled from 'styled-components'
import { cores } from '../../styles'

export const MainHeader = styled.div`
  height: 186px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${cores.laranja};
  font-size: 18px;

  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const RestaurantHero = styled.div`
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 24px;
  padding-bottom: 32px;

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #ffffff;
    font-size: 32px;
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
