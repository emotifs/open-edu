import React from 'react';
import {Container} from 'reactstrap';
import {Link} from 'react-router-dom';

function MainGoal() {
    return (
        <div className="main-goal">
            <Container>
                <h2>Ilmdan o'zga najot yo'qdir</h2>
                <p>
                Ilm qayerda bo'lishidan qattiy nazar uni egallash va tarqatish bizning  burchimizdir, <br />majburiyatimizdir. Shunday ekan biz bilan eng zo'rlariga erishing
                </p>
                <Link to="/sign-up" className="btn btn-light py-3 px-4">Ro'yxatdan o'tish</Link>
            </Container>
        </div>
    )
}

export default MainGoal;
