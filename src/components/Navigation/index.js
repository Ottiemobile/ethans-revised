import React from 'react';
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {

    return (
        <section className="navigation">
            <nav>
                <div >
                    <button
                        
                        type="button">
                            <span></span>
                    </button>

                    <div className="collapse-navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">

                            <li
                                className={` ${
                                    props.location.pathname=== "/" ? "active" : ""
                                }`}
                            >
                                <Link  to="/">
                                    Home
                                    <span></span>
                                </Link>
                            </li>

                            <li 
                                className={` ${
                                    props.location.pathname === "/about" ? "active" : ""
                                }`}
                            >
                                <Link to="/about">
                                    About
                                </Link>
                            </li>

                            <li
                                className={` ${
                                    props.location.pathname === "/contact" ? "active" : ""
                                }`}
                            >
                                <Link  to="/contact">
                                    Contact Me
                                </Link>
                            </li>
                            <li
                                 className={` ${
                                 props.location.pathname === "/resume" ? "active" : ""
                                }`}
                            > 
                                <Link  to="/resume">
                                    Resume    
                                </Link>    
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </section>
    );

}

export default withRouter(Navigation);