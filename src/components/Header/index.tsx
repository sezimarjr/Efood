import { HeaderImagem, HeaderTitle } from './styles'
import headerImg from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HeaderImagem style={{ backgroundImage: `url(${headerImg})` }}>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <HeaderTitle>
          Viva experiências gastronômicas <br /> no conforto da sua casa
        </HeaderTitle>
      </div>
    </HeaderImagem>
  )
}
export default Header
