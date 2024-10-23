import { FoodType, MainHeader, RestaurantHero, RestaurantTitle } from './styles'
import logo from '../../assets/images/logo.png'
import banner from '../../assets/images/Vector.png'
import { Link } from 'react-router-dom'
import { Restaurante } from '../../pages/Home'

type Props = {
  restaurante: Restaurante
}
const HeaderProducts = ({ restaurante }: Props) => {
  return (
    <div>
      <MainHeader style={{ backgroundImage: `url(${banner})` }}>
        <div className="container">
          <h3>Restaurantes</h3>
          <Link to="/">
            <img src={logo} alt="teste" />
          </Link>

          <h3>0 produto(s) no carrinho</h3>
        </div>
      </MainHeader>

      {/* Div para imagem restaurante */}
      <RestaurantHero style={{ backgroundImage: `url(${restaurante.capa})` }}>
        <div className="container">
          <FoodType>{restaurante.tipo}</FoodType>
          <RestaurantTitle>{restaurante.titulo}</RestaurantTitle>
        </div>
      </RestaurantHero>
    </div>
  )
}

export default HeaderProducts
