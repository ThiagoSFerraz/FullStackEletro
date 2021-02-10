import {ListGroup, ListGroupItem} from 'react-bootstrap'
import './lojas.css'

export default function ListaLoja(){
    return(
        <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-12 col-md-8 my-5">
                <ListGroup className="text-white">
                    <ListGroup.Item className="lista">Rio de Janeiro</ListGroup.Item>
                    <ListGroup.Item className="lista">Avenida Presidente Vargas, 5000</ListGroup.Item>
                    <ListGroup.Item className="lista">10 &ordm; andar</ListGroup.Item>
                    <ListGroup.Item className="lista">Centro</ListGroup.Item>
                    <ListGroup.Item className="lista">3333-3333</ListGroup.Item>
                </ListGroup>
            </div>
            <div className="col-lg-3 col-sm-12 col-md-8 my-5">
                <ListGroup className="text-white">
                    <ListGroup.Item className="lista">São Paulo</ListGroup.Item >
                    <ListGroup.Item className="lista">Avenida Paulista, 985</ListGroup.Item >
                    <ListGroup.Item className="lista">Térreo</ListGroup.Item >
                    <ListGroup.Item className="lista">Centro</ListGroup.Item >
                    <ListGroup.Item className="lista">7777-7777</ListGroup.Item>
                </ListGroup>
            </div>
            <div className="col-lg-3 col-sm-12 col-md-8 my-5">
                <ListGroup className="text-white">
                    <ListGroup.Item className="lista">São Paulo</ListGroup.Item>
                    <ListGroup.Item className="lista">Avenida Lero Lero, 6999</ListGroup.Item>
                    <ListGroup.Item className="lista">42 &ordm; andar</ListGroup.Item>
                    <ListGroup.Item className="lista">Aliança</ListGroup.Item>
                    <ListGroup.Item className="lista">7272-7272</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    )
}