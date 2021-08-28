import React from 'react'
import { Container } from 'reactstrap';
import NavSec from '../home/NavSec';
import Reveal from 'react-reveal/Reveal';
import UniverList from './SchoolList';
import FooterContainer from '../footer/containers/footer'

function Mit() {
    return (
        <div>
             <div className="dark-navbar">
                <Reveal effect="animNav" duration="750">
                    <NavSec />
                </Reveal>
            </div>

           
                <div className="mit-header">
                <Container>
                    <h1>
                        MIT
                    </h1>
                    <p>MIT universitetiga  <span className="text-yellow">hujjat</span> topshirish
                    </p>
                    
            </ Container>
                </div>  

                <Container>
                    <div className="mit-body">   

                        <div className="about-university">
                            <h2>Universitet haqida: </h2>
<p>While MIT is perhaps best known for its programs in engineering and the physical sciences, other areas—notably economics, political science, urban studies, linguistics, and philosophy—are also strong. Admission is extremely competitive, and undergraduate students are often able to pursue their own original research.
                            </p>
                        </div>

                        <h2>Talablar: </h2>
                        <p>GPA requirements < br />
                        Testing requirements, including SAT and ACT requirements <br />
                        Application requirements <br /></p>
                        <a href="https://mitadmissions.org/apply/firstyear/international/" className="btn btn-warning">Hujjat topshrish</a>
                    </div>
                </Container>
            <FooterContainer />
        </div>
    )
}

export default Mit;
