import React from 'react';
import { Container, Row, Col, Card, Navbar } from 'react-bootstrap';
import ChamadosAbertosXFechados from '../../Charts/Chart'
import ChartChamadosAbertosEquipe from '../../Charts/ChartChamadosFechadosEquipe'
import ChartFechadoPorEquipe from '../../Charts/ChartAbertosEquipe'
import NavBar from '../NavBar/NavBar'
import Maps from '../Maps/Maps';



const Content = () => {
    return (
        <>
            <Container className="mt-3">
                <h4 class="display-6">Indicadores - GLPI</h4>
                <hr />
                <Row>

                    <Col md={6}>
                        <Card className="shadow-sm p-3 bg-white rounded">
                            <Card.Body>
                                <ChamadosAbertosXFechados></ChamadosAbertosXFechados>
                            </Card.Body>
                        </Card>
                        <Card className="shadow-sm p-3 mt-3  bg-white rounded">
                            <Card.Body>
                                <ChartFechadoPorEquipe></ChartFechadoPorEquipe>
                            </Card.Body>
                        </Card>
                        <Card className="shadow-sm p-3 bg-white mb-2 rounded mt-3    ">
                            <Card.Body>
                                <Maps></Maps>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="shadow-sm p-3 bg-white  rounded">
                            <Card.Body>
                                <ChartChamadosAbertosEquipe></ChartChamadosAbertosEquipe>
                            </Card.Body>
                        </Card>
                        <Card className="shadow-sm p-3 bg-white mt-2 rounded">
                            <Card.Body>
                                <h6>Briefing</h6>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


            </Container>



        </>

    );



}

export default Content;