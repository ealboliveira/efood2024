import logo from '../../assets/Images/logo.png'
import background from '../../assets/Images/fundo.png'

import {
  BackgroundImg,
  BackgroundImgPro,
  Logo,
  Nav,
  Title,
  LinksNav
} from './styles'
import { Link } from 'react-router-dom'

type Props = {
  category: 'home' | 'profile'
}

const Header = ({ category }: Props) => {
  if (category === 'home') {
    return (
      <header>
        <BackgroundImg style={{ backgroundImage: `url(${background})` }}>
          <Link to="/">
            <Logo src={logo} alt="EFOOD" />
          </Link>
          <Title>
            Viva experiências gastronômicas
            <br />
            no conforto da sua casa
          </Title>
        </BackgroundImg>
      </header>
    )
  }

  return (
    <header>
      <BackgroundImgPro style={{ backgroundImage: `url(${background})` }}>
        <div className="container">
          <Nav>
            <LinksNav to="/">Restaurantes</LinksNav>
            <Link to="/">
              <img src={logo} alt="EFOOD" />
            </Link>
            <p>0 produto(s) no carrinho</p>
          </Nav>
        </div>
      </BackgroundImgPro>
    </header>
  )
}

export default Header