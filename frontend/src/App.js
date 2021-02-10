import Menu from './components/menu';

import { BrowserRouter } from 'react-router-dom';
import  Rotas  from './rotas';

import { Container } from 'react-bootstrap';
import './app.css'


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header>
           <Menu/>
        </header>
            <Rotas />
      </div>
    </BrowserRouter>
  );
}

export default App;
