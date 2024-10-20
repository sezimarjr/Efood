import RestaurantClass from '../../models/Restaurant'
import Restaurant from '../Restaurant'
import { List } from './styles'

export type Props = {
  restaurants: RestaurantClass[]
}

const RestaurantsList = ({ restaurants }: Props) => {
  return (
    <div>
      <div className="container">
        <List>
          {restaurants.map((restaurant) => (
            <Restaurant
              key={restaurant.id}
              title={restaurant.title}
              description={restaurant.description}
              image={restaurant.image}
              rating={restaurant.rating}
              infos={restaurant.infos}
            />
          ))}
        </List>
      </div>
    </div>
  )
}

export default RestaurantsList
