import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Boton from './components/boton/Boton'

function App() {

  return (
    <div>
      <Boton />
      <NavBar />
      <ItemListContainer greeting={'Tu tienda favorita'} />
    </div>
  )
}

export default App
