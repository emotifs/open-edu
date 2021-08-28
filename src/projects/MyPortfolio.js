import React from 'react'
import { Container } from 'reactstrap';
import NavSec from '../home/NavSec';
import '../projects/projects.scss';
import PortfolioHeader from './PortfolioHeader';

function MyPortfolio() {
    return (
        <div className="portfolio">
            <div className="portfolio-navbar ">
                <NavSec />
            </div>
            <PortfolioHeader className="mb-5"/>
            <Container>
               <div className="form-group mt-5">
                    <input type="text" className="form-control"/>
                    <buton type="submit" className="btn btn-dark">Add</buton>
               </div>

               <ol id="achieve">
                    <li>
                        1-st place at IOI 2022
                    </li>
               </ol>
            </Container>
        </div>
    )
}

export default MyPortfolio
