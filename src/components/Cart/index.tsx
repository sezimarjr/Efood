import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { useSelector, useDispatch } from 'react-redux'

import {
  CartButton,
  CartContainer,
  CartItem,
  Overlay,
  Precos,
  SideBar
} from './styles'

import { formataPreco } from '../Product'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acc, item) => acc + item.preco, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p> {formataPreco(item.preco)}</p>
              </div>
              <button onClick={() => removeItem(item.id)} />
            </CartItem>
          ))}
        </ul>
        <Precos>
          <p>Valor total</p>
          <span>{formataPreco(getTotalPrice())}</span>
        </Precos>
        <CartButton>Continuar com a entrega</CartButton>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
