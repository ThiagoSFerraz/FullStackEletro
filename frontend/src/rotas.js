import { Switch, Route } from 'react-router-dom';

import  Produtos  from './pages/produtos'
import  Pedidos  from './pages/pedidos'
import Home from './pages/homepage';
import Lojas from './pages/lojas';

function Rotas() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/produtos" component={Produtos} />
            <Route exact path="/pedidos" component={Pedidos} />
            <Route exact path="/lojas" component={Lojas}/>
        </Switch>
    )
}

export default Rotas;