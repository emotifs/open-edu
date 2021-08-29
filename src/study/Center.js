import React, {useState, useEffect} from 'react'
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
    const [loading, setLoading] = useState(true);
      
    useEffect(() => {
      const loadData = async () => {
        await new Promise((r) => setTimeout(r, 2000));
        setLoading((loading) => !loading);
      };
        
      loadData();
    }, [])
    if (loading) {
        return <div className="loader-total">
            <div className="loader-wrapper">
                <div className="loader">
                <div className="roller"></div>
                <div className="roller"></div>
            </div>
            
            <div id="loader2" className="loader">
                <div className="roller"></div>
                <div className="roller"></div>
            </div>
            
            <div id="loader3" className="loader">
                <div className="roller"></div>
                <div className="roller"></div>
            </div>
            </div>
        </div>
    }
      
    else {
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
                            Bootcamp UX/UI kurslarida darslar boshlanish arafasida!
                            </CardText>
                            <Button
                                className="btn btn-warning"
                                href="https://t.me/najottalim"
                                onClick={(e) => e.preventDefault()}
                            >
                                50$
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
                            <CardTitle>PDP o'quv markazi</CardTitle>
                            <CardText>
                                Bizda yangi flutter kurslari ochilmoqda
                            </CardText>
                            <Button
                                className="btn btn-warning"
                                href="https://pdp.uz"
                                onClick={(e) => e.preventDefault()}
                            >
                                40$
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
                            <CardTitle>Cambridge learning Center</CardTitle>
                            <CardText>
                                IELTS full course ochilisharafasida
                            </CardText>
                            <Button
                                className="btn btn-warning"
                                href="https://cambridgeonline.uz/login"
                                onClick={(e) => e.preventDefault()}
                            >
                                60$
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
                            <CardTitle>Everest education</CardTitle>
                            <CardText>
                                IELTS graduation kurslari endi hamyonbop narxlarda
                            </CardText>
                            <Button
                                className="btn btn-warning"
                                href="https://t.me/everestofficial"
                                onClick={(e) => e.preventDefault()}
                            >
                                40$
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
                            <CardTitle>Inter-nation</CardTitle>
                            <CardText>
                                English language kurslari
                            </CardText>
                            <Button
                                className="btn btn-warning"
                                href="https://www.inter-nation.uz/"
                                onClick={(e) => e.preventDefault()}
                            >
                                60$
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
                            <CardTitle>Profi education</CardTitle>
                            <CardText>
                                SAT kurslari ochilmoqda
                            </CardText>
                            <Button
                                className="btn btn-warning"
                                href="https://t.me/s/profieducation_group?before=2127"
                                onClick={(e) => e.preventDefault()}
                            >
                                45$
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
}

export default Center
