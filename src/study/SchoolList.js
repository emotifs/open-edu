import React from 'react';
import LanguageIcon from '@material-ui/icons/Language';

function SchoolList() {
    return (
        <div>
           <table class="table table-bordered table-striped table-dark" cellSpacing="20px">
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktab</td>
            <td><a href="https://ictschool.uz/" className="btn btn-warning btn-school"> <LanguageIcon />  &nbsp;  Web sahifasi</a></td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Prezident Maktabi</td>
            <td><a href="https://piima.uz/en/page/presidential-schools" className="btn btn-warning btn-school"> <LanguageIcon />  &nbsp;  Web sahifasi</a></td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td>Merit School</td>
            <td><a href="https://www.instagram.com/merit.school.uz/" className="btn btn-warning btn-school"> <LanguageIcon />  &nbsp;  Web sahifasi</a></td>
            </tr>
            <tr>
            <th scope="row">4</th>
            <td>Ibn Sino maktabi</td>
            <td><a href="https://www.ibnsino-maktab.uz/" className="btn btn-warning btn-school"> <LanguageIcon />  &nbsp;  Web sahifasi</a></td>
            </tr>
            <tr>
            <th scope="row">5</th>
            <td>Mirzo Ulugbek maktabi</td>
            <td><a href="https://muimi.uz/" className="btn btn-warning btn-school"> <LanguageIcon />  &nbsp;  Web sahifasi</a></td>
            </tr>
            <tr>
            <th scope="row">6</th>
            <td>48-maktab</td>
            <td><a href="https://t.me/oomaktab48" className="btn btn-warning btn-school"> <LanguageIcon />  &nbsp;  Web sahifasi</a></td>
            </tr>
            <tr>
            <th scope="row">7</th>
            <td>Westminister litseyi</td>
            <td><a href="https://lyceumadmission.wiut.uz/" className="btn btn-warning btn-school"> <LanguageIcon />  &nbsp;  Web sahifasi</a></td>
            </tr>
            <tr>
            <th scope="row">8</th>
            <td>Diplomatiya litseyi</td>
            <td><a href="https://aluwed.uz/" className="btn btn-warning btn-school"> <LanguageIcon />  &nbsp;  Web sahifasi</a></td>
            </tr>
            <tr>
            <th scope="row">9</th>
            <td>Cambridge international school</td>
            <td><a href="https://college.cambridge.uz/" className="btn btn-warning btn-school"> <LanguageIcon />  &nbsp;  Web sahifasi</a></td>
            </tr>
            <tr>
            <th scope="row">10</th>
            <td>10-maktab</td>
            <td><a href="#" className="btn btn-warning btn-school"> <LanguageIcon />  &nbsp;  Web sahifasi</a></td>
            </tr>
        </tbody>
</table>
        </div>
    )
}

export default SchoolList;
