import React, {useState, useEffect} from 'react';
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
  import ziyo from '../images/volounteering and projects/ziyo.jpg'
  import zamin from '../images/volounteering and projects/zamin.jpg'
  import heart from '../images/volounteering and projects/heart.jpg'
  import mfaktor from '../images/volounteering and projects/mfaktor.png'
  import educator from '../images/volounteering and projects/educator.png'
  import dg from '../images/volounteering and projects/dg.png'




  const style = { width: "18rem" };

function AllProjects() {
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
                            src={heart}
                            top
                            ></CardImg>
                            <CardBody>
                            <CardTitle>Yurak amri</CardTitle>
                            <CardText>
                                Ushbu loyihaga yordam berish uchun ko'ngillar kerak
                            </CardText>
                            <Button
                                className="btn btn-warning"
                                href="https://t.me/sardor_Rahimxon_Yurak_Amri_Ajruz"
                                onClick={(e) => e.preventDefault()}
                            >
                                Bog'lanish
                            </Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg="4">
                        <Card style={style}>
                            <CardImg
                            alt="..."
                            src={dg}
                            top
                            ></CardImg>
                            <CardBody>
                            <CardTitle>Digital Generation uzbekistan</CardTitle>
                            <CardText>
                                Bizga React bilan ishlay oladigan Front-end developerni jamoyimizga olamiz 
                            </CardText>
                            <Button
                                className="btn btn-warning"
                                href="http://camp.digitalgeneration.uz/"
                                onClick={(e) => e.preventDefault()}
                            >
                                Bog'lanish
                            </Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg="4">
                        <Card style={style}>
                            <CardImg
                            alt="..."
                            src={ziyo}
                            top
                            ></CardImg>
                            <CardBody>
                            <CardTitle>Ziyo forum</CardTitle>
                            <CardText>
                                Forum tashkillashtirish uchun 
                            </CardText>
                            <Button
                                className="btn btn-warning"
                                href="https://ziyoforum.uz/"
                                onClick={(e) => e.preventDefault()}
                            >
                                Bog'lanish
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
                            src={zamin}
                            top
                            ></CardImg>
                            <CardBody>
                            <CardTitle>Zamin foundation</CardTitle>
                            <CardText>
                                Scratch dasturi bilan ishlasshni biladigan mentor kerak
                            </CardText>
                            <Button
                                className="btn btn-warning"
                                href="https://www.zaminfoundation.ngo/"
                                onClick={(e) => e.preventDefault()}
                            >
                                Bog'lanish
                            </Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg="4">
                        <Card style={style}>
                            <CardImg
                            alt="..."
                            src={mfaktor}
                            top
                            ></CardImg>
                            <CardBody>
                            <CardTitle>Mfaktor</CardTitle>
                            <CardText>
                                Video montajchini guruhimizga taklif qilamiz
                            </CardText>
                            <Button
                                className="btn btn-warning"
                                href="http://mfaktor.uz/"
                                onClick={(e) => e.preventDefault()}
                            >
                                Bog'lanish
                            </Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg="4">
                        <Card style={style}>
                            <CardImg
                            alt="..."
                            src={educator}
                            top
                            ></CardImg>
                            <CardBody>
                            <CardTitle>Educator</CardTitle>
                            <CardText>
                                Senior Backend developerni mentorlik uchun jamoamizga taklif qilamiz
                            </CardText>
                            <Button
                                className="btn btn-warning"
                                href="https://educator.uz/"
                                onClick={(e) => e.preventDefault()}
                            >
                                Bog'lanish
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

export default AllProjects
