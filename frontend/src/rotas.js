import { Switch, Route } from 'react-router-dom';

import  Produtos  from './pages/produtos'
import  Pedidos  from './pages/pedidos'
import Home from './pages/homepage';
import Contato from './pages/contato';

function Rotas() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/produtos" component={Produtos} />
            <Route exact path="/pedidos" component={Pedidos} />
            <Route exact path="/contato" component={Contato}/>
        </Switch>
    )
}

export default Rotas;