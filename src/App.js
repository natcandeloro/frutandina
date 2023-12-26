import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App container">
        <header>
          <nav>         
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Nosotros</Link>
              </li>
              <li>
                <Link to="/">Productos</Link>
              </li>
              <li>
                <Link to="/">Contacto</Link>
              </li>
            </ul>
          </nav>
        </header>
      <section id='home'>
      </section>
      <section id='nosotros'>
        <h1>QUIENES SOMOS?</h1>
      </section>
      <section id='productos'>
        <h1>PRODUCTOS</h1>
      </section>
      <section id='contacto'>
        <h1>CONTACTO </h1>
      </section>
    </div>
  );
}

export default App;
