import fLogo from '../../assets/images/facebook-round-svgrepo-com 1.png'
import iLogo from '../../assets/images/instagram-round-svgrepo-com.png'
import tLogo from '../../assets/images/twitter-2-svgrepo-com 1.png'
import efoodLogo from '../../assets/images/logo.png'

import * as S from './styles'

const Footer = () => {
  return (
    <S.Container>
      <div className="container">
        <S.FooterContent>
          <h2>
            <img src={efoodLogo} alt="EFOOD" />
          </h2>

          <S.Links>
            <li>
              <a href="#">
                <img src={iLogo} alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={fLogo} alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={tLogo} alt="Twitter" />
              </a>
            </li>
          </S.Links>
        </S.FooterContent>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, <br /> qualidade dos produtos é toda do
          estabelecimento contratado.
        </p>
      </div>
    </S.Container>
  )
}
export default Footer
