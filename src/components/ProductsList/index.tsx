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
              id={product.id}
              key={product.id}
              foto={product.foto}
              nome={product.nome}
              descricao={product.descricao}
              porcao={product.porcao}
              preco={product.preco}
            />
          ))}
        </Links>
      </div>
    </div>
  )
}

export default ProductsList
