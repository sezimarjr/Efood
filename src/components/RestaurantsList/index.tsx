import Restaurant from '../Restaurant'
import { List } from './styles'

export type Props = {
  restaurants: Restaurante[]
}

const RestaurantsList = ({ restaurants }: Props) => {
  return (
    <div>
      <div className="container">
        <List>
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <Restaurant
                id={restaurant.id}
                title={restaurant.titulo}
                description={restaurant.descricao}
                cover={restaurant.capa}
                rating={restaurant.avaliacao}
                info={restaurant.tipo}
                destacado={restaurant.destacado}
              />
            </li>
          ))}
        </List>
      </div>
    </div>
  )
}

export default RestaurantsList
