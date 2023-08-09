import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal, { Container } from './styles'

import './global.css'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Header />
        <Hero />
        <div className="container">
          <ListaVagas />
        </div>
      </Container>
    </>
  )
}

export default App
