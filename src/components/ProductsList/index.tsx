import Products from '../../models/Product'
import Product from '../Product'
import { Links } from './styles'

type Props = {
  products: Products[]
}

const ProductsList = ({ products }: Props) => {
  return (
    <div>
      <div className="container">
        <Links>
          {products.map((product) => (
            <Product
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
            />
          ))}
        </Links>
      </div>
    </div>
  )
}

export default ProductsList
