import React from 'react'
import '../projects/projects.scss';
import NavSec from '../home/NavSec';

function SignUp() {
    return (
        <>
        <div className="auth-wrapper">
               <div className="auth-inner">
                   
               <form>
                <h3>Ro'yxatdan o'tish</h3>

                <div className="form-group my-3">
                    <label>Ism</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

              
                <div className="form-group my-3">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group my-3">
                    <label>Parol</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group my-3">
                    <label>Nimaga qiziqasiz?</label>
                    <select name="roads" id="roads" className="form-control">
                         <option value="schoolarships">Schoolarships</option>
                         <option value="edu">Edu News</option>
                         <option value="programms">Programms</option>
                        <option value="competetions">Competetions</option>
                    </select>
                </div>


                <button type="submit" className="btn btn-warning     btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">Sign in?</a>
                </p>
            </form>
               </div>
        </div>
        </>
    )
}

export default SignUp
