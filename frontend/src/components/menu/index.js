import { Navbar, Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';



function BaseMenu(props) {
    const { location } = props
    return(
        
        <Navbar className="navbar" bg="danger" expand="lg">
            <Navbar.Brand className=" text-white">
                FullStackEletro &copy;
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="item-menu" />
            <Navbar.Collapse id="item-menu" data-toggle="collapse">
                <Nav className="ml-auto text-white mr-3 px-5">
                    <Nav.Item>
                        <Nav.Link className="px-4 text-white" as={Link} href="/" to="/">Página Inicial</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="px-4 text-white"  as={Link} href="/produtos" to="/produtos" >Produtos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="px-4 text-white" as={Link} href="/pedidos" to="/pedidos" >Pedidos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="px-4 text-white" as={Link} href="/contato" to="/contato" >Entre em contato</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

const Menu = withRouter(BaseMenu)

export default Menu