import React from 'react'
import '../projects/projects.scss';
import user from '../images/use.png';
import {
    Container,
    Row, 
    Col
} from 'reactstrap'

function PortfolioHeader() {
    return (
        
        <div className="portfolio-header">
            <Container>
                <Row>
                    <Col lg="4">
                        <img src={user} alt="#" className="profile-photo"/>
                    </Col>

                    <Col lg="4" sm="2">
                        <div className="name">Ism <span className="surname">Familya</span></div>
                    </Col>

                    <Col lg="4" sm="2">
                    <div className="user-id">id: <span>01234567</span></div>
                    </Col>
                </Row>
            </Container>
        </div>  
    )
}

export default PortfolioHeader
