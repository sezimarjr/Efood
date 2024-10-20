class RestaurantClass {
  title: string
  description: string
  image: string
  rating: string
  infos: string[]
  id: number

  constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    rating: string,
    infos: string[]
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.rating = rating
    this.infos = infos
  }
}

export default RestaurantClass
