import React from 'react';
import {
    Container
} from 'reactstrap';

function Institution() {
    return (
       <> 
            <div  className="header-text">
                <h1>
                    Muassasa
                </h1>
                <p>
                    Bu bo'limning asosiy maqsadi - ta'lim dargohlari o'rtasida o'zaro sof raqobat va sifatni rivojlantirishga qaratilgan. 
                </p>
            </div>
            <div className="institut">
                <Container>
                 <div className="instit">
                    <ul>
                        <li>
                            <h3>
                                Maktab
                            </h3>

                            <p>
                                Barcha o'rta maxsus maktablar orasidagi reyting
                            </p>
                        </li>

                        <li>
                            <h3>
                                Universitet
                            </h3>

                            <p>
                                Mahalliy va halqaro universitetlar orasidagi reyting
                            </p>
                        </li>

                        <li>
                            <h3>
                                O'quv Markaz
                            </h3>

                            <p>
                                Barcha o'quv markazlari reytingi va ular haqida ma'lumot
                            </p>
                        </li>
                    </ul>
                 </div>
                </Container>
            </div>
       </>
    )
}

export default Institution
