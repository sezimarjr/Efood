import * as S from './styles'
type Props = {
  title: string
  description: string
  image: string
}
const Product = ({ title, description, image }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 92) {
      return descricao.slice(0, 120) + '...'
    }
    return descricao
  }
  return (
    <>
      <S.Container>
        <img src={image} alt={title} />

        <S.ProductContent>
          <S.ProductTitle>{title}</S.ProductTitle>
          <p>{getDescricao(description)}</p>
          <S.ProductButton type="submit">Mais detalhes</S.ProductButton>
        </S.ProductContent>
      </S.Container>
      <div>teste</div>
    </>
  )
}

export default Product
