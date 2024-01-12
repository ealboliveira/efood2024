import instagram from '../../assets/Images/instagram.svg'
import facebook from '../../assets/Images/facebook.svg'
import twitter from '../../assets/Images/twitter.svg'
import logo from '../../assets/Images/logo.png'

import { Logo, SFooter, Links } from './styles'

const Footer = () => (
  <SFooter>
    <Logo src={logo} alt="logo" />
    <Links>
      <li>
        <a href="#">
          <img src={instagram} alt="instagram" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={facebook} alt="facebook" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={twitter} alt="twitter" />
        </a>
      </li>
    </Links>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{' '}
    </p>
  </SFooter>
)

export default Footer
