import React from "react"
import { PropTypes } from "prop-types"
import { Link } from "react-router-dom"

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className={`navbar-brand text-${props.mode==='light'?'dark':'light'}` } to="/">{props.logo}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link  text-${props.mode==='light'?'dark':'light'}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/about">{props.title}</Link>
                        </li>


                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    {/* <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" onClick={props.greenMode} role="switch" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-${(props.mode==='light'?'success':'light')}`} htmlFor="flexSwitchCheckDefault">{props.mode==='success'?'Enable LightMode':'Enable Green Theme'}</label>
                    </div> */}
                    
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" onClick={props.modeControl} role="switch" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-${(props.mode==='light'?'dark':'light')}`} htmlFor="flexSwitchCheckDefault">{(props.mode==='dark' || props.mode==='success')?'Enable LightMode':'Enable DarkMode'}</label>
                    </div>
                    </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    logo: PropTypes.string.isRequired,
    title: PropTypes.string,
}

Navbar.defaultProps = {
    logo: 'Set Logo here'
};