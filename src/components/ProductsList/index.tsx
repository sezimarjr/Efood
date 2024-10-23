import { Cardapio } from '../../pages/Home'
import Product from '../Product'
import { Links } from './styles'

type Props = {
  products: Cardapio[]
}

const ProductsList = ({ products }: Props) => {
  return (
    <div>
      <div className="container">
        <Links>
          {products.map((product) => (
            <Product
              key={product.id}
              image={product.foto}
              title={product.nome}
              description={product.descricao}
            />
          ))}
        </Links>
      </div>
    </div>
  )
}

export default ProductsList
