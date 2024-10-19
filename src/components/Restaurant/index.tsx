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
  title: string
  description: string
  image: string
  rating: string
  infos: string[]
}
const Restaurant = ({ title, description, image, rating, infos }: Props) => {
  return (
    <Card>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Content>
        <TitleContent>
          <h2>{title}</h2>
          <Rating>
            <h2>{rating}</h2>
            <img src={estrela} alt="Estrela" />
          </Rating>
        </TitleContent>

        <Descricao>{description}</Descricao>
        <Button type="button">Saiba Mais</Button>
      </Content>
    </Card>
  )
}

export default Restaurant
