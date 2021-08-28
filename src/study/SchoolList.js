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
        </tbody>
</table>
        </div>
    )
}

export default SchoolList;
