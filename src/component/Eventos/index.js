import React,{Component} from 'react';
import {Card,Button,Container, Row,Col, Jumbotron} from 'react-bootstrap';
import './eventos.css'

class Eventos extends Component{

    // constructor(props){
    //     super(props);
    //     this.state = {
        
    //     }
    // }    
    render(){
        return(
            <div>
                <Jumbotron>
                    <h1 className="titulo">Próximos rolês perto de você</h1>
                    <Container>
                        <Row>
                            <Col lg={3} md={4} xs={12}>
                            <Card className="card" bg="primary">
                                <Card.Header><h5>Chutebola 18:00</h5></Card.Header>
                                
                                <Card.Footer><Button bg="secondary"></Button></Card.Footer>
                            </Card>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default Eventos;