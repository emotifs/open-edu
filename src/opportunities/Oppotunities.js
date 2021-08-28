import React from 'react'
import { Container } from 'reactstrap';
import NavSec from '../home/NavSec';
import Reveal from 'react-reveal/Reveal';
import FooterContainer from '../footer/containers/footer';
import OppoList from './OppoList';

function Opportunities() {
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
                        Imkoniyatlar
                    </h1>
                    <p>Bu bo'limda chiqadigan har bitta ma'lumot siz o'sishingiz uchun ajoyib <span className="text-yellow"> imkoniyatdir</span>
                    </p>
                </div>  
                <OppoList />
            </ Container>
            <FooterContainer />
        </div>
    )
}

export default Opportunities;
