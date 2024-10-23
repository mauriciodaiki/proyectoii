import './App.css';
import Header from './Header.js';
import Contacto from './Contacto.js';
import Precios from './Precios.js';
import Profesores from './Profesores.js';

function App() {
  return (
    <div className="App">
    <Header />
    <Profesores />
    <Precios />   
    <Contacto />
 </div>
  );
}

export default App;
