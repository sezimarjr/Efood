import { useGetRestaurantsListQuery } from '../../services/api'
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
  const { data: restaurants } = useGetRestaurantsListQuery()

  if (!restaurants) {
    return <h1>Carregando</h1>
  }

  return (
    <>
      <Header />
      <RestaurantsList restaurants={restaurants} />
    </>
  )
}

export default Home
