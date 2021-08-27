import React from 'react';
import MainGoal from './MainGoal';
import NavSec from './NavSec';
import Reveal from 'react-reveal/Reveal';

const HomeMain = () => {
    return(
        <div className="Home">
          <Reveal effect="animNav" duration="750">
                <NavSec />
           </Reveal>
            <MainGoal />
            
        </div>
    )
}

export default HomeMain;