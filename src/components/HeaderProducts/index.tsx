import { FoodType, MainHeader, RestaurantHero, RestaurantTitle } from './styles'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../../assets/images/logo.png'
import banner from '../../assets/images/Vector.png'
import { Link } from 'react-router-dom'
import { RootReducer } from '../../store'
import { breakpoints } from '../../styles'

type Props = {
  restaurante: Restaurante
}
const HeaderProducts = ({ restaurante }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }
  return (
    <div>
      <MainHeader style={{ backgroundImage: `url(${banner})` }}>
        <div className="container">
          {parseInt(breakpoints.desktop) < window.innerWidth ? (
            <h3>Restaurantes</h3>
          ) : (
            <></>
          )}

          <Link to="/">
            <img src={logo} alt="teste" />
          </Link>

          <h3>
            <span style={{ cursor: 'pointer' }} onClick={openCart}>
              {items.length}
            </span>{' '}
            produto(s) no carrinho
          </h3>
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
