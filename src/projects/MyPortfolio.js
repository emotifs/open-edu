import React from 'react'
import NavSec from '../home/NavSec';
import '../projects/projects.scss';
import PortfolioHeader from './PortfolioHeader';

function MyPortfolio() {
    return (
        <div className="portfolio">
            <div className="portfolio-navbar">
                <NavSec />
            </div>
            <PortfolioHeader />

        </div>
    )
}

export default MyPortfolio
