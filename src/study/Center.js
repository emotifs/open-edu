import React from 'react'
import NavSec from '../home/NavSec';
import Reveal from 'react-reveal/Reveal';
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

  import Najot from '../images/cards/najot.jpg';
  import pdp from '../images/cards/pdp.jpg';
  import Cambridge from '../images/cards/cambridge.jpg';
  import Everest from '../images/cards/Everest.jpg';
  import Inter from '../images/cards/internation.png';
  import Profi from '../images/cards/profi.jpg';
  import FooterContainer from '../footer/containers/footer'

  const style = { width: "18rem" };


function Center() {
    return (
        <div>   
            <div className="dark-navbar">
                <Reveal effect="animNav" duration="750">
                    <NavSec />
                </Reveal>
            </div>

            <Container>
                <div className="page-header">
                    <h1>
                        O'quv Markazlari
                    </h1>
                    <p>Barcha o'quv markazlari <span className="text-yellow">reytingi</span>  va ular haqida ma'lumot
                    O'quv markazlari quyidagi tamoyillarga asosan baholanadi. <br/>
                            1. O'quvchilarning qo'lga kiritgan yutuqlari yoki sertifikatlari. <br/>
                            2. O'qituvchilarning darajasi. <br/>
                            3. O'quv binosidagi shart-sharoitlar. <br/>
                            4. Bitiruvchilarning ishga kirish yoki o'qishga foizi.
                    </p>
                </div>  
                <Row>
                    <Col lg="4">
                        <Card style={style}>
                            <CardImg
                            alt="..."
                            src={Najot}
                            top
                            ></CardImg>
                            <CardBody>
                            <CardTitle>Najot ta'lim</CardTitle>
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
                            src={pdp}
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
                            src={Cambridge}
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
                            src={Everest}
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
                            src={Inter}
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
                            src={Profi}
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

export default Center
