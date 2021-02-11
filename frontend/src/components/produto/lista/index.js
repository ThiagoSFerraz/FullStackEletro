import { ListGroup, ListGroupItem } from 'react-bootstrap'
import React from 'react'



export default function Lista(){
    return(
        
                
                    <ListGroup className="text-white">
                        <ListGroup.Item className="bg-dark border border-danger">Todos (9)</ListGroup.Item>
                        <ListGroup.Item className="bg-dark border border-danger">Geladeira (3)</ListGroup.Item>
                        <ListGroup.Item className="bg-dark border border-danger">Fogão (2)</ListGroup.Item>
                        <ListGroup.Item className="bg-dark border border-danger">Microondas (2)</ListGroup.Item>
                        <ListGroup.Item className="bg-dark border border-danger">Lava Roupas (1)</ListGroup.Item>
                        <ListGroup.Item className="bg-dark border border-danger">Lava Louças (1)</ListGroup.Item>
                    </ListGroup>
                
       
    )
}