import { useEffect, useState } from 'react'
import RestaurantsList from '../../components/RestaurantsList'
import Header from '../../components/Header'

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}
export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurante[]>([])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes').then(
      (res) => {
        return res.json().then((res) => setRestaurants(res))
      }
    )
  }, [])
  return (
    <>
      <Header />
      <RestaurantsList restaurants={restaurants} />
    </>
  )
}

export default Home
