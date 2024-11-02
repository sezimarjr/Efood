import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import InputMask from 'react-input-mask'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import { clear, close, remove } from '../../store/reducers/cart'
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
  TabButton,
  CheckoutMessage
} from './styles'

import { formataPreco } from '../Product'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [menu, setMenu] = useState('cart')
  const dispatch = useDispatch()
  const [purchase, { data, isSuccess }] = usePurchaseMutation()

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
      zipCode: Yup.string()
        .min(9, 'O CEP deve ter 8 digitos')
        .max(9, 'O CEP deve ter 8 digitos')
        .required('O CEP é obrigatório'),
      number: Yup.string().required('O numero e obrigatorio'),

      cardOwner: Yup.string()
        .min(3, 'O nome precisa ter ao menos 3 Caracteres')
        .when((values, schema) =>
          menu === 'payment'
            ? schema.required('O nome do cartão é obrigatorio')
            : schema
        ),
      cardNumber: Yup.string().when((values, schema) =>
        menu === 'payment'
          ? schema
              .required('O numero do cartão é obrigatorio')
              .min(19, 'O numero do cartão deve ter pelo menos 16 digitos')
              .max(19, 'O numero do cartão deve ter pelo menos 16 digitos')
          : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        menu === 'payment'
          ? schema
              .required('O CVV do cartão é obrigatorio')
              .min(3, 'O CVV deve ter pelo menos 3 digitos')
              .max(3, 'O CVV deve ter pelo menos 3 digitos')
          : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        menu === 'payment'
          ? schema.required('O Mês do cartão é obrigatorio')
          : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        menu === 'payment'
          ? schema
              .required('O Ano do cartão é obrigatorio')
              .min(2, 'O Ano deve ter pelo menos 2 digitos')
              .max(2, 'O Ano deve ter pelo menos 2 digitos')
          : schema
      )
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
  const checkInputHasError = (field: string) => {
    const isTouched = field in form.touched
    const isInvalid = field in form.errors

    const hasError = isTouched && isInvalid

    return hasError
  }
  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acc, item) => acc + item.preco, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToPayment = () => {
    const isDeliveryValid =
      !form.errors.fullName &&
      !form.errors.address &&
      !form.errors.city &&
      !form.errors.zipCode &&
      !form.errors.number &&
      form.values.fullName !== '' &&
      form.values.address !== '' &&
      form.values.city !== '' &&
      form.values.zipCode !== '' &&
      form.values.number !== ''

    if (isDeliveryValid) {
      setMenu('payment')
    }
  }

  const finishOrder = () => {
    closeCart()
    setMenu('cart')
    window.location.href = '/'
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
      setMenu('checkout')
    }
  }, [isSuccess, dispatch])

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
              <p className="empty-cart">
                O carrinho está vazio, adicione pelo menos um produto para
                continuar com a compra
              </p>
            </SideBar>
          )}
        </>
      )}
      {menu === 'delivery' && (
        <SideBar>
          <h3>Entrega</h3>
          <form onSubmit={form.handleSubmit}>
            <InputGroup>
              <label htmlFor="fullName">Quem irá Receber</label>
              <input
                className={checkInputHasError('fullName') ? 'error' : ''}
                type="text"
                name="fullName"
                id="fullName"
                value={form.values.fullName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </InputGroup>

            <InputGroup>
              <label htmlFor="address">Endereço</label>
              <input
                className={checkInputHasError('address') ? 'error' : ''}
                type="text"
                name="address"
                id="address"
                value={form.values.address}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </InputGroup>

            <InputGroup>
              <label htmlFor="">Cidade</label>
              <input
                className={checkInputHasError('city') ? 'error' : ''}
                type="text"
                name="city"
                id="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </InputGroup>

            <Row gap="34px">
              <InputGroup>
                <label htmlFor="zipCode">CEP</label>
                <InputMask
                  className={checkInputHasError('zipCode') ? 'error' : ''}
                  mask="99999-999"
                  maskChar={null}
                  type="text"
                  name="zipCode"
                  id="zipCode"
                  value={form.values.zipCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="number">Número</label>
                <input
                  className={checkInputHasError('number') ? 'error' : ''}
                  type="text"
                  name="number"
                  id="number"
                  value={form.values.number}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </InputGroup>
            </Row>
            <InputGroup>
              <label htmlFor="complement">Complemento(Opcional)</label>
              <input
                type="text"
                name="complement"
                id="complement"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </InputGroup>
            <TabButton className="margin-top">
              <CartButton type="submit" onClick={goToPayment}>
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
          <form onSubmit={form.handleSubmit}>
            <InputGroup>
              <label htmlFor="cardOwner"> Nome no cartão </label>
              <input
                className={checkInputHasError('cardOwner') ? 'error' : ''}
                type="text"
                name="cardOwner"
                id="cardOwner"
                value={form.values.cardOwner}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </InputGroup>
            <Row gap="30px">
              <InputGroup>
                <label htmlFor="cardNumber">Número do cartão</label>
                <InputMask
                  className={checkInputHasError('cardNumber') ? 'error' : ''}
                  mask="9999 9999 9999 9999"
                  maskChar={null}
                  type="text"
                  name="cardNumber"
                  id="cardNumber"
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </InputGroup>
              <InputGroup maxWidth="87px">
                <label htmlFor="cardCode">CVV</label>
                <InputMask
                  className={checkInputHasError('cardCode') ? 'error' : ''}
                  mask="999"
                  maskChar={null}
                  type="text"
                  name="cardCode"
                  id="cardCode"
                  value={form.values.cardCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </InputGroup>
            </Row>
            <Row gap="34px">
              <InputGroup>
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <InputMask
                  className={checkInputHasError('expiresMonth') ? 'error' : ''}
                  mask="99"
                  maskChar={null}
                  type="text"
                  max={12}
                  min={0}
                  name="expiresMonth"
                  id="expiresMonth"
                  value={form.values.expiresMonth}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <InputMask
                  className={checkInputHasError('expiresYear') ? 'error' : ''}
                  mask="99"
                  maskChar={null}
                  type="text"
                  name="expiresYear"
                  id="expiresYear"
                  value={form.values.expiresYear}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </InputGroup>
            </Row>
            <TabButton className="margin-top" marginTop="16px">
              <CartButton type="submit">Finalizar Pagamaneto</CartButton>
              <CartButton onClick={() => setMenu('delivery')}>
                Voltar para a edição de endereço
              </CartButton>
            </TabButton>
          </form>
        </SideBar>
      )}
      {menu === 'checkout' && isSuccess && data && (
        <SideBar>
          <CheckoutMessage>
            <h3>Seu pedido foi concluído - {data.orderId}</h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <br />
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <br />
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <br />
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
          </CheckoutMessage>
          <CartButton onClick={finishOrder}>Concluir</CartButton>
        </SideBar>
      )}
      {menu === 'checkout' && !isSuccess && (
        <SideBar>
          <CheckoutMessage>
            <h3>Erro na transação</h3>
            <p>Verifique os dados do cartão</p>
          </CheckoutMessage>
          <CartButton onClick={() => setMenu('cart')}>
            Voltar ao carrinho
          </CartButton>
        </SideBar>
      )}
    </CartContainer>
  )
}

export default Cart
