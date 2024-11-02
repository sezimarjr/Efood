import { useGetRestaurantsListQuery } from '../../services/api'
import RestaurantsList from '../../components/RestaurantsList'
import Header from '../../components/Header'
import Loader from '../../components/Loader'

const Home = () => {
  const { data: restaurants } = useGetRestaurantsListQuery()

  if (!restaurants) {
    return <Loader />
  }

  return (
    <>
      <Header />
      <RestaurantsList restaurants={restaurants} />
    </>
  )
}

export default Home
