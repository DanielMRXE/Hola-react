import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//importando los componentes
import MiComponentes from './components/MiComponentes';

function holamundo(nombre, edad){
  var presentacion =(
    <div>
      <h2>Hola soy {nombre}</h2>
      <h3>tengo  {edad} años</h3>
    </div>
  );
  return presentacion;
}

function App() {
  var nombre="Daniel Escobar";


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Hola bienvenido al curso de React de Daniel Escobar

        </p>
       { holamundo(nombre,12)}
        
      </header>

    <section className='componentes'>
      <MiComponentes/>
      </section>

    </div>
  );
}

export default App;
