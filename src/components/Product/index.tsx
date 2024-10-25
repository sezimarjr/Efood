import { useDispatch } from 'react-redux'
import { useState } from 'react'
import * as S from './styles'
import close from '../../assets/images/close.png'
import { add, open } from '../../store/reducers/cart'

type Props = {
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
  id: number
}

export const formataPreco = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  }).format(price)
}
const Product = ({ nome, descricao, foto, porcao, preco, id }: Props) => {
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false)

  const addToCart = () => {
    dispatch(
      add({
        nome,
        descricao,
        foto,
        porcao,
        preco,
        id
      })
    )
    dispatch(open())
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 92) {
      return descricao.slice(0, 120) + '...'
    }
    return descricao
  }
  return (
    <>
      <S.Container>
        <img src={foto} alt={nome} />

        <S.ProductContent>
          <S.ProductTitle>{nome}</S.ProductTitle>
          <p>{getDescricao(descricao)}</p>
          <S.ProductButton onClick={() => setModal(true)}>
            Mais detalhes
          </S.ProductButton>
        </S.ProductContent>
      </S.Container>
      <S.Modal className={modal ? 'visible' : ''}>
        <S.ModalContent className="container">
          <img src={foto} alt={nome} />
          <div className="close" onClick={() => setModal(false)}>
            <img src={close} alt="Botão de fechar" />
          </div>
          <div className="details">
            <h2>{nome}</h2>
            <p>
              {descricao}
              <br />
              <br />
              Serve: {porcao}
            </p>

            <S.Botao
              onClick={() => {
                addToCart()
                setModal(false)
              }}
            >
              Adicionar ao carrinho - R$ {formataPreco(preco)}
            </S.Botao>
          </div>
        </S.ModalContent>

        <div className="overlay" onClick={() => setModal(false)} />
      </S.Modal>
    </>
  )
}

export default Product
