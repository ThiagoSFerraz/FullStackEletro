import { ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap'

export default function Pedido(props){
    return(
        
                
                   
                        <ListGroup className="my-3 text-center">
                            <ListGroup.Item className="bg-dark text-white">Nome do cliente: {props.nome_cliente}</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Produto: {props.descricao}</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Preço: {props.preco}</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Quantidade: {props.quantidade}</ListGroup.Item>
                        </ListGroup>
                    
                
       
    )
}