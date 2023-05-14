import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

const App = (props) => {
  return (
    <>
      <div>
        <NavBar/>
        <ItemListContainer greeting="Bienvenidos"/>
      </div>
    </>
  )
}

export default App
