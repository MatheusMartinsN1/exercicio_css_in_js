import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { Container, EstiloGlobal } from './global'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Hero />
      <Container className="container">
        <ListaVagas />
      </Container>
    </>
  )
}

export default App
