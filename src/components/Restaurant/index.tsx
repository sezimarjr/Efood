type Props = {
  title: string
  description: string
  image: string
  rating: string
  infos: string[]
}
const Restaurant = ({ title, description, image, rating, infos }: Props) => {
  return (
    <div>
      <h1>Restaurant</h1>
    </div>
  )
}

export default Restaurant
