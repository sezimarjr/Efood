import { FoodType, MainHeader, RestaurantHero, RestaurantTitle } from './styles'
import logo from '../../assets/images/logo.png'
import resBanner from '../../assets/images/imagem_de_fundo.png'
import banner from '../../assets/images/Vector.png'

const HeaderProducts = () => {
  return (
    <div>
      <MainHeader style={{ backgroundImage: `url(${banner})` }}>
        <div className="container">
          <h3>Restaurantes</h3>
          <img src={logo} alt="teste" />
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
