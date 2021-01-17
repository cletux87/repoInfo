import React from 'react';
import './navbar.css';

const Navbar = (props) =>{

    return(
        <div className='topnav' id='myTopnav'>
            <nav className="navbar navbar-expand-lg navbar-light navbar-conatiner">
                <a className="navbar-brand navbar-text" style={{color:'#FFB144'}} href="/">GIT PROJECT</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link navbar-text" style={{color:'white'}} href="/info">Info</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link navbar-text" style={{color:'white'}} href="/commit">Commit</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link navbar-text" style={{color:'white'}} href="/project">Project</a>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;