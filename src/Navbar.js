import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark mb-3 shadow-xl p-3 mb-5 rounded ">
                <a className="navbar-brand text-white" href=" ">Authentication</a>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-target=" navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to='homepage' className="nav-item nav-link text-white " > Home</Link>
                        <Link to='Account' className="nav-item nav-link text-white" > Accounts</Link>
                        <Link to='About' className="nav-item nav-link text-white">About</Link>
                        <Link to='userDetails' className="nav-item nav-link text-white">User Details</Link>
                        {/* <Link to='loginpage' className="nav-item nav-link text-white">Login</Link> */}

                    </div>
                </div>
            </nav>

        </div>
    )
}






export default Navbar;










