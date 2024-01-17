import Restaurant from '../../components/Restaurant'
import { RestaurantType } from '../../pages/Home'
import { List } from '../ProductList/styles'

type Props = {
  restaurants: RestaurantType[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <div className="container">
    <List isProfilePage={window.location.pathname.includes('/profile/')}>
      {restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          id={restaurant.id}
          titulo={restaurant.titulo}
          destacado={restaurant.destacado}
          tipo={restaurant.tipo}
          avaliacao={restaurant.avaliacao}
          descricao={restaurant.descricao}
          capa={restaurant.capa}
        />
      ))}
    </List>
  </div>
)
export default RestaurantsList
