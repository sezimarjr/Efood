import Header from './components/Header'
import testImage from './assets/images/imagem.png'

import { GlobalCss } from './styles'
import Restaurant from './components/Restaurant'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
    </>
  )
}

export default App

// <Restaurant
//         description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
//         image={testImage}
//         infos={['Destaque semana', 'Japonesa']}
//         rating="4.9"
//         title="Hioki Sushi"
//       />
