import React from 'react';
import NavSec from '../home/NavSec';
import '../projects/projects.scss';
import './ProjectsHeader';
import ProjectsHeader from './ProjectsHeader';
import FooterContainer from '../footer/containers/footer'
import {
    Container, 
    Button,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText,
    Row, 
    Col
  } from "reactstrap";

  import hackaton from '../images/projects/hackaton.jpg'

  const style = { width: "18rem" };

function AllProjects() {
    return (
       <div className="projects">
        <div className="projects-navbar">
            <NavSec className="dark"/>
        </div>
        <Container> 
            <ProjectsHeader /> 
            <Row>
                    <Col lg="4">
                        <Card style={style}>
                            <CardImg
                            alt="..."
                            src={hackaton}
                            top
                            ></CardImg>
                            <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardText>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </CardText>
                            <Button
                                className="btn btn-warning"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                            >
                                Go somewhere
                            </Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg="4">
                        <Card style={style}>
                            <CardImg
                            alt="..."
                            src={hackaton}
                            top
                            ></CardImg>
                            <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardText>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </CardText>
                            <Button
                                className="btn btn-warning"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                            >
                                Go somewhere
                            </Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg="4">
                        <Card style={style}>
                            <CardImg
                            alt="..."
                            src={hackaton}
                            top
                            ></CardImg>
                            <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardText>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </CardText>
                            <Button
                                className="btn btn-warning"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                            >
                                Go somewhere
                            </Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row className="my-5">
                    <Col lg="4">
                        <Card style={style}>
                            <CardImg
                            alt="..."
                            src={hackaton}
                            top
                            ></CardImg>
                            <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardText>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </CardText>
                            <Button
                                className="btn btn-warning"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                            >
                                Go somewhere
                            </Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg="4">
                        <Card style={style}>
                            <CardImg
                            alt="..."
                            src={hackaton}
                            top
                            ></CardImg>
                            <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardText>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </CardText>
                            <Button
                                className="btn btn-warning"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                            >
                                Go somewhere
                            </Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg="4">
                        <Card style={style}>
                            <CardImg
                            alt="..."
                            src={hackaton}
                            top
                            ></CardImg>
                            <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardText>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </CardText>
                            <Button
                                className="btn btn-warning"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                            >
                                Go somewhere
                            </Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

        </Container>
        <FooterContainer />
       </div>
    )
}

export default AllProjects
