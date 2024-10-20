import * as S from './styles'
type Props = {
  title: string
  description: string
  image: string
}
const Product = ({ title, description, image }: Props) => {
  return (
    <S.Container>
      <img src={image} alt={title} />

      <S.ProductContent>
        <S.ProductTitle>{title}</S.ProductTitle>
        <p>{description}</p>
        <S.ProductButton type="submit">Adicionar ao carrinho</S.ProductButton>
      </S.ProductContent>
    </S.Container>
  )
}

export default Product
