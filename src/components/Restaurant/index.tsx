import Tag from '../Tag'
import {
  Button,
  Card,
  Content,
  Descricao,
  Infos,
  Rating,
  TitleContent
} from './styles'
import estrela from '../../assets/images/estrela.png'

type Props = {
  id: number
  title: string
  description: string
  cover: string
  rating: string
  info: string
  destacado: boolean
}
const Restaurant = ({
  title,
  description,
  cover,
  rating,
  info,
  id,
  destacado
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 92) {
      return descricao.slice(0, 250) + '...'
    }
    return descricao
  }
  return (
    <Card>
      <img src={cover} alt={title} />
      <Infos>
        {destacado && <Tag>Destaque da semana</Tag>}
        <Tag>{info}</Tag>
      </Infos>
      <Content>
        <TitleContent>
          <h2>{title}</h2>
          <Rating>
            <h2>{rating}</h2>
            <img src={estrela} alt="Estrela" />
          </Rating>
        </TitleContent>

        <Descricao>{getDescricao(description)}</Descricao>
        <Button to={`/restaurant/${id}`}>Saiba Mais</Button>
      </Content>
    </Card>
  )
}

export default Restaurant
