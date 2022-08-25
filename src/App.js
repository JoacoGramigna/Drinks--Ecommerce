import './App.css';
import './components/NavBar';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <>
      <header>
        <NavBar />
        <ItemListContainer greeting={"Hola! Bienvenido a nuestra app"} />
        <div className="backgroundIndex"></div>
        <div class="textoIndex">
          <h1>Armá tus tragos con nosotros.</h1>
        </div>
      </header>
      <div className="App"></div>
    </>
  );
}

export default App;
