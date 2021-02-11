import Menu from './components/menu/'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  Rotas  from './rotas';
import './app.css'
import React from 'react'


function App() {
  return (
    <BrowserRouter>
    <Route>
      <div className="app">
        <header>
           <Menu/>
        </header>
            <Rotas />
      </div>
      </Route>
    </BrowserRouter>
  );
}

export default App;
