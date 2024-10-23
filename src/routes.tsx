import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import MenuRestaurant from './pages/MenuRestaurant'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/:id" element={<MenuRestaurant />} />
  </Routes>
)

export default Rotas
