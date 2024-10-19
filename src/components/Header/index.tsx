import { HeaderImagem, HeaderTitle } from './styles'
import headerImg from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <HeaderImagem style={{ backgroundImage: `url(${headerImg})` }}>
      <div className="container">
        <img src={logo} alt="logo" />
        <HeaderTitle>
          Viva experiências gastronômicas <br /> no conforto da sua casa
        </HeaderTitle>
      </div>
    </HeaderImagem>
  )
}
export default Header
