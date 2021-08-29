import React from 'react'
import { Container } from 'reactstrap';
import NavSec from '../home/NavSec';
import '../projects/projects.scss';
import PortfolioHeader from './PortfolioHeader';
import ToDo from '../projects/ToDo'

function MyPortfolio() {
    return (
        <div className="portfolio">
            <div className="portfolio-navbar ">
                <NavSec />
            </div>
            <PortfolioHeader className="mb-5"/>
            <Container>
                <ToDo />
            </Container>
        </div>
    )
}

export default MyPortfolio
