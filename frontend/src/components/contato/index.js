import {ListGroup} from 'react-bootstrap'
export default function ListaLoja(){
    return(
        <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-12 col-md-8 my-5">
                <ListGroup className="text-white">
                    <ListGroup.Item className="bg-dark border border-danger">Rio de Janeiro</ListGroup.Item>
                    <ListGroup.Item className="bg-dark border border-danger">Avenida Presidente Vargas, 5000</ListGroup.Item>
                    <ListGroup.Item className="bg-dark border border-danger">10 &ordm; andar</ListGroup.Item>
                    <ListGroup.Item className="bg-dark border border-danger">Centro</ListGroup.Item>
                    <ListGroup.Item className="bg-dark border border-danger">3333-3333</ListGroup.Item>
                </ListGroup>
            </div>
            <div className="col-lg-3 col-sm-12 col-md-8 my-5">
                <ListGroup className="text-white">
                    <ListGroup.Item className="bg-dark border border-danger">São Paulo</ListGroup.Item >
                    <ListGroup.Item className="bg-dark border border-danger">Avenida Paulista, 985</ListGroup.Item >
                    <ListGroup.Item className="bg-dark border border-danger">Térreo</ListGroup.Item >
                    <ListGroup.Item className="bg-dark border border-danger">Centro</ListGroup.Item >
                    <ListGroup.Item className="bg-dark border border-danger">7777-7777</ListGroup.Item>
                </ListGroup>
            </div>
            <div className="col-lg-3 col-sm-12 col-md-8 my-5">
                <ListGroup className="text-white">
                    <ListGroup.Item className="bg-dark border border-danger">São Paulo</ListGroup.Item>
                    <ListGroup.Item className="bg-dark border border-danger">Avenida Lero Lero, 6999</ListGroup.Item>
                    <ListGroup.Item className="bg-dark border border-danger">42 &ordm; andar</ListGroup.Item>
                    <ListGroup.Item className="bg-dark border border-danger">Aliança</ListGroup.Item>
                    <ListGroup.Item className="bg-dark border border-danger">7272-7272</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    )
}