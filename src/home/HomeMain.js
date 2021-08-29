import React from 'react';
import MainGoal from './MainGoal';
import NavSec from './NavSec';
import Reveal from 'react-reveal/Reveal';
import Institution from './Institution';
import SecondSec from './SecondSec';
import FooterContainer from '../footer/containers/footer';


function HomeMain () {
    return(
        <> 
            <div className="Home">
                <Reveal effect="animNav" duration="750">
                    <NavSec />
                </Reveal>
                <MainGoal />
            </div>
        
            <Institution />
            <SecondSec />
            <FooterContainer />
        </>
    )
}

export default HomeMain;