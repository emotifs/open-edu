import React from 'react'
import { Container } from 'reactstrap';
import NavSec from '../home/NavSec';
import Reveal from 'react-reveal/Reveal';
import UniverList from './SchoolList';
import FooterContainer from '../footer/containers/footer'

function School() {
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
                        Maktablar
                    </h1>
                    <p>Barcha o'rta maxsus maktablar orasidagi <span className="text-yellow">reytingi</span>
                    </p>
                </div>  
                <UniverList />
            </ Container>
            <FooterContainer />
        </div>
    )
}

export default School;
