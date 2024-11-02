import { useParams } from 'react-router-dom'
import { useGetRestaurantQuery } from '../../services/api'

import ProductsList from '../../components/ProductsList'
import HeaderProducts from '../../components/HeaderProducts'
import Loader from '../../components/Loader'

const MenuRestaurant = () => {
  const { id } = useParams()

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: restaurant } = useGetRestaurantQuery(id!)

  if (!restaurant) {
    return (
      <>
        <Loader />
      </>
    )
  }
  return (
    <>
      <HeaderProducts restaurante={restaurant} />
      <ProductsList products={restaurant.cardapio} />
    </>
  )
}

export default MenuRestaurant
