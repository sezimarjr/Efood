import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import InputMask from 'react-input-mask'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import { close, remove } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import {
  CartButton,
  CartContainer,
  CartItem,
  Overlay,
  Precos,
  SideBar,
  InputGroup,
  Row,
  TabButton
} from './styles'

import { formataPreco } from '../Product'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [menu, setMenu] = useState('cart')
  const dispatch = useDispatch()
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(3, 'O nome precisa ter ao menos 3 Caracteres')
        .required('O nome e obrigatorio'),
      address: Yup.string().required('O endereço e obrigatorio'),
      city: Yup.string().required('A Cidade e obrigatorio'),
      zipCode: Yup.string().required('O CEP é obrigatório'),
      number: Yup.string().required('O numero e obrigatorio'),
      complement: Yup.string(),
      cardOwner: Yup.string()
        .min(3, 'O nome precisa ter ao menos 3 Caracteres')
        .required('O nome do proprietário do cartão e obrigatorio'),
      cardNumber: Yup.string().required('O numero do cartão e obrigatorio'),
      cardCode: Yup.string().required('O CVC do cartão e obrigatorio'),
      expiresMonth: Yup.string().required('O mes do vencimento e obrigatorio'),
      expiresYear: Yup.string().required('O ano do vencimento e obrigatorio')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })
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

      {menu === 'cart' && (
        <>
          {items.length > 0 ? (
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
              <CartButton onClick={() => setMenu('delivery')}>
                Continuar com a entrega
              </CartButton>
            </SideBar>
          ) : (
            <SideBar>
              <p>Não há itens no carrinho</p>
            </SideBar>
          )}
        </>
      )}
      {menu === 'delivery' && (
        <SideBar>
          <h3>Entrega</h3>
          <form>
            <InputGroup>
              <label htmlFor="fullname">Quem irá Receber</label>
              <input type="text" name="fullname" id="fullname" />
            </InputGroup>

            <InputGroup>
              <label htmlFor="address">Endereço</label>
              <input type="text" name="address" id="address" />
            </InputGroup>

            <InputGroup>
              <label htmlFor="">Cidade</label>
              <input type="text" name="city" id="city" />
            </InputGroup>

            <Row gap="34px">
              <InputGroup>
                <label htmlFor="zipCode">CEP</label>
                <input type="text" name="zipCode" id="zipCode" />
              </InputGroup>
              <InputGroup>
                <label htmlFor="number">Número</label>
                <input type="text" name="number" id="number" />
              </InputGroup>
            </Row>
            <InputGroup>
              <label htmlFor="complement">Complemento(Opcional)</label>
              <input type="text" name="complement" id="complement" />
            </InputGroup>
            <TabButton className="margin-top">
              <CartButton onClick={() => setMenu('payment')} type="button">
                Continuar com o pagamento
              </CartButton>
              <CartButton onClick={() => setMenu('cart')}>
                Voltar para o carrinho
              </CartButton>
            </TabButton>
          </form>
        </SideBar>
      )}
      {menu === 'payment' && (
        <SideBar>
          <h3>Pagamento - Valor a pagar {formataPreco(getTotalPrice())}</h3>
          <InputGroup>
            <label htmlFor="cardName"> Nome no cartão </label>
            <input type="text" name="cardName" id="cardName" />
          </InputGroup>
          <Row gap="30px">
            <InputGroup>
              <label htmlFor="cardNumber">Número do cartão</label>
              <input type="text" name="cardNumber" id="cardNumber" />
            </InputGroup>
            <InputGroup maxWidth="87px">
              <label htmlFor="cardCode">CVV</label>
              <input type="text" name="cardCode" id="cardCode" />
            </InputGroup>
          </Row>
          <Row gap="34px">
            <InputGroup>
              <label htmlFor="expiresMonth">Mês de vencimento</label>
              <input type="text" name="expiresMonth" id="expiresMonth" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="expiresYear">Ano de vencimento</label>
              <input type="text" name="expiresYear" id="expiresYear" />
            </InputGroup>
          </Row>
          <TabButton className="margin-top" marginTop="16px">
            <CartButton>Finalizar Pagamaneto</CartButton>
            <CartButton onClick={() => setMenu('delivery')}>
              Voltar para a edição de endereço
            </CartButton>
          </TabButton>
        </SideBar>
      )}
    </CartContainer>
  )
}

export default Cart
