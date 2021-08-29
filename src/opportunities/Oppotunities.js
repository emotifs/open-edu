import React, {useEffect, useState} from 'react'
import { Container } from 'reactstrap';
import NavSec from '../home/NavSec';
import Reveal from 'react-reveal/Reveal';
import FooterContainer from '../footer/containers/footer';
import OppoList from './OppoList';

function Opportunities() {
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
                    <p>Bu bo'limda chiqadigan har bitta yangilik siz uchun ajoyib <span className="text-yellow"> imkoniyatdir</span>
                    </p>
                </div>  
                <OppoList />
            </ Container>
            <FooterContainer />
        </div>
    )
    }
}

export default Opportunities;
