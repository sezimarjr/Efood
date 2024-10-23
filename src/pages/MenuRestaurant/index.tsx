import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Restaurante } from '../Home'
import ProductsList from '../../components/ProductsList'
import HeaderProducts from '../../components/HeaderProducts'

const MenuRestaurant = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`).then(
      (res) => {
        return res.json().then((res) => setRestaurant(res))
      }
    )
  }, [id])

  if (!restaurant) {
    return (
      <>
        <h1>Carregando</h1>
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
