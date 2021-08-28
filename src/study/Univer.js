import React from 'react'
import { Container } from 'reactstrap';
import NavSec from '../home/NavSec';
import Reveal from 'react-reveal/Reveal';
import UniverList from './UniverList';
import FooterContainer from '../footer/containers/footer'

function Univer() {
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
                        Universitetlar
                    </h1>
                    <p>Mahalliy va halqaro universitetlar orasidagi <span className="text-yellow">reytingi</span>
                    </p>

                    <input
                        type="checkbox"
                        name="only_local"
                        id="only_local"
                        className=" text-warning"
                    />

                    <label for="only_local"> &nbsp; &nbsp; Faqat mahalliy universitetlar</label>
                </div>  
                <UniverList />
            </ Container>
            <FooterContainer />
        </div>
    )
}

export default Univer;
