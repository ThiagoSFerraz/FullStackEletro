import { ListGroup, ListGroupItem } from 'react-bootstrap'
import './lista.css'


export default function Lista(){
    return(
        
                
                    <ListGroup className="text-white">
                        <ListGroup.Item className="lista">Todos (9)</ListGroup.Item>
                        <ListGroup.Item className="lista">Geladeira (3)</ListGroup.Item>
                        <ListGroup.Item className="lista">Fogão (2)</ListGroup.Item>
                        <ListGroup.Item className="lista">Microondas (2)</ListGroup.Item>
                        <ListGroup.Item className="lista">Lava Roupas (1)</ListGroup.Item>
                        <ListGroup.Item className="lista">Lava Louças (1)</ListGroup.Item>
                    </ListGroup>
                
       
    )
}