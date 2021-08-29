import React from 'react'
import {Link} from 'react-router-dom';

function UniverList() {


    return (
        <>
           <div>
            <table class="table table-bordered table-striped table-dark" cellSpacing="20px">
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Massachusetts Institute of Technology</td>
                <td>Xalqaro</td>
                <td><Link to="/mit" className="btn btn-warning btn-univer"> Hujjat topshirish</Link></td>
                <td><a href="https://www.mit.edu/" className="btn btn-primary btn-univer">Batafsil ma'lumot</a></td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Stanford University</td>
                <td>Xalqaro</td>
                <td><a href="#" className="btn btn-warning btn-univer">Hujjat topshirish</a></td>
                <td><a href="https://www.stanford.edu/" className="btn btn-primary btn-univer">Batafsil ma'lumot</a></td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Harvard University</td>
                <td>Xalqaro</td>
                <td><a href="#" className="btn btn-warning btn-univer">Hujjat topshirish</a></td>
                <td><a href="https://www.harvard.edu/" className="btn btn-primary btn-univer">Batafsil ma'lumot</a></td>
                </tr>
                <tr>
                <th scope="row">4</th>
                <td>California Institute of Technology (Caltech)</td>
                <td>Xalqaro</td>
                <td><a href="#" className="btn btn-warning btn-univer">Hujjat topshirish</a></td>
                <td><a href="#" className="btn btn-primary btn-univer">Batafsil ma'lumot</a></td>
                </tr>
                <tr>
                <th scope="row">5</th>
                <td>University of Oxford</td>
                <td>Xalqaro</td>
                <td><a href="#" className="btn btn-warning btn-univer">Hujjat topshirish</a></td>
                <td><a href="https://www.ox.ac.uk/" className="btn btn-primary btn-univer">Batafsil ma'lumot</a></td>
                </tr>
                


                {/* Mahalliy */}

                <tr>
                <th scope="row">651-700</th>
                <td>Vestminster Universiteti</td>
                <td>Mahalliy</td>
                <td><a href="#" className="btn btn-warning btn-univer">Hujjat topshirish</a></td>
                <td><a href="#" className="btn btn-primary btn-univer">Batafsil ma'lumot</a></td>
                </tr>
                <tr>
                <th scope="row">#</th>
                <td>Toshkent Axborot Texnologiyalari Universiteti</td>
                <td>Mahalliy</td>
                <td><a href="#" className="btn btn-warning btn-univer">Hujjat topshirish</a></td>
                <td><a href="#" className="btn btn-primary btn-univer">Batafsil ma'lumot</a></td>
                </tr>
                <tr>
                <th scope="row">#</th>
                <td>O'zbekiston Milliy Universiteti</td>
                <td>Mahalliy</td>
                <td><a href="#" className="btn btn-warning btn-univer">Hujjat topshirish</a></td>
                <td><a href="#" className="btn btn-primary btn-univer">Batafsil ma'lumot</a></td>
                </tr>
                <tr>
                <th scope="row">#</th>
                <td>	Toshkent Davlat Pedagogika Universiteti</td>
                <td>Mahalliy</td>
                <td><a href="#" className="btn btn-warning btn-univer">Hujjat topshirish</a></td>
                <td><a href="#" className="btn btn-primary btn-univer">Batafsil ma'lumot</a></td>
                </tr>
                <tr>
                <th scope="row">#</th>
                <td>Toshkent Tibbiyot Akademiyasi</td>
                <td>Mahalliy</td>
                <td><a href="#" className="btn btn-warning btn-univer">Hujjat topshirish</a></td>
                <td><a href="#" className="btn btn-primary btn-univer">Batafsil ma'lumot</a></td>
                </tr>
            </tbody>
            </table>
            </div>
        </>
    )
}

export default UniverList
