import React from 'react';
import {Container} from 'reactstrap';
import {Link} from 'react-router-dom';

function MainGoal() {
    return (
        <div className="main-goal">
            <Container>
                <h2>Orzularni birgalikda <br /> <span>voqealashtiramiz</span></h2>
                <p>
                    Apply to college for the first time or transfer to complete your <br/> degree. Navigate your 
                    entire college application journey.
                </p>

                {/* <a href="#" className="btn btn-light px-4 py-3 mt-3">
                    Hujjat topshirish
                </a> */}
                <Link to="/sign-up" className="btn btn-light py-3 px-4">Ro'yxatdan o'tish</Link>
            </Container>
        </div>
    )
}

export default MainGoal;
