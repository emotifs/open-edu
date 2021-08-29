import React from 'react';
import oppor from '../images/oppor.jpg';
import portfolio from '../images/portfolio.jpg'
import {
    Container, 
    Row, 
    Col
} from 'reactstrap';
import {Link} from 'react-router-dom';
import Bounce from 'react-reveal/Bounce';

function SecondSec() {
    return (
        <div className="my-5">
           <Container>
            <Row>
                    <Col lg="6">
                    <Bounce left>
                        <img src={oppor} className="w-75" alt="#" />
                    </Bounce>
                    </Col>
                    <Col lg="6" className="second-sec-info">
                        <h3>Imkoniyatlar</h3>
                        <p>Bu bo'limda chiqadigan har bitta ma'lumot siz o'sishingiz uchun ajoyib imkoniyatdir</p>
                        <Link to="/opportunities" className="btn btn-warning">Ko'proq</Link>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col lg="6" className="second-sec-info">
                    <h3>Portfel</h3>
                        <p>Siz erishgan yutuqlaringiz va bajargan ishlaringiz shaxsingizni yaqqol namayon qilib beradi va xarita vazifasini bajaradi</p>
                        <Link to="/portfolio" className="btn btn-warning">Ko'proq</Link>
                    </Col>
                    <Col lg="6">
                    <Bounce right>
                        <img src={portfolio} className="w-35" alt="#" />
                    </Bounce>
                    </Col>
                </Row>
           </Container>
        </div>
    )
}

export default SecondSec
