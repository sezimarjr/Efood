import { FoodType, MainHeader, RestaurantHero, RestaurantTitle } from './styles'
import logo from '../../assets/images/logo.png'
import resBanner from '../../assets/images/imagem_de_fundo.png'
import banner from '../../assets/images/Vector.png'
import { Link } from 'react-router-dom'

const HeaderProducts = () => {
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
      <RestaurantHero style={{ backgroundImage: `url(${resBanner})` }}>
        <div className="container">
          <FoodType>Italiana</FoodType>
          <RestaurantTitle>La Dolce Vita Trattoria</RestaurantTitle>
        </div>
      </RestaurantHero>
    </div>
  )
}

export default HeaderProducts
