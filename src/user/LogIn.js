import React from 'react';
import NavSec from '../home/NavSec';

function LogIn() {
    return (
        <>
            <div className="auth-navbar">
              <NavSec />
            </div>

            <div className="auth-wrapper">
             <div className="auth-inner">
             <form>
                <h3>Sign In</h3>

                <div className="form-group my-3">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group my-3">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group my-3">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1"> &nbsp;Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-warning btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Haven't  <a href="#">registered yet?</a>
                </p>
            </form>
             </div>
        </div>
        </>
    )
}

export default LogIn
