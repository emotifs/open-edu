import React, {useEffect, useState} from 'react';
import MainGoal from './MainGoal';
import NavSec from './NavSec';
import Reveal from 'react-reveal/Reveal';
import Institution from './Institution';
import SecondSec from './SecondSec';
import FooterContainer from '../footer/containers/footer';


function HomeMain () {

    const [loading, setLoading] = useState(true);
      
    useEffect(() => {
      const loadData = async () => {
        await new Promise((r) => setTimeout(r, 2000));
        setLoading((loading) => !loading);
      };
        
      loadData();
    }, [])
    if (loading) {
        return <div className="loader-total">
            <div className="loader-wrapper">
                <div className="loader">
                <div className="roller"></div>
                <div className="roller"></div>
            </div>
            
            <div id="loader2" className="loader">
                <div className="roller"></div>
                <div className="roller"></div>
            </div>
            
            <div id="loader3" className="loader">
                <div className="roller"></div>
                <div className="roller"></div>
            </div>
            </div>
        </div>
    }
      
    else {
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
}

export default HomeMain;