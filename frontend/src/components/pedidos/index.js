import { ListGroup } from 'react-bootstrap'
import React from 'react'

export default function Pedido(props){
    return(
        
                
                   
                        <ListGroup className="my-3 text-center text-white">
                            <ListGroup.Item className="bg-dark border border-danger">Nome do cliente: {props.nome_cliente}</ListGroup.Item>
                            <ListGroup.Item className="bg-dark border border-danger">Produto: {props.descricao}</ListGroup.Item>
                            <ListGroup.Item className="bg-dark border border-danger">Preço: {props.preco}</ListGroup.Item>
                            <ListGroup.Item className="bg-dark border border-danger">Quantidade: {props.quantidade}</ListGroup.Item>
                        </ListGroup>
                    
                
       
    )
}