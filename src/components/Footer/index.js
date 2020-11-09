import React from "react";
import { a } from "react-router-dom";


function Footer() {

    return (
   
            

            <footer className="flex-row px-1 bg-dark fixed-bottom">

                <div className="external_links margin-left ">
                    <ul className="nav">
                        <li className="nav-item">
                            <a target="_blank" rel="noreferrer" className="m-0 text-right " href= "https://www.linkedin.com/in/ethan-torres-425622b4/">LinkedIn</a>
                        </li>

                        <li className="nav-item">
                        <a target="_blank" rel="noreferrer" className="m-0 text-right " href= "https://www.github.com/Ottiemobile">Github</a>
                        </li>
                        
                    </ul>
                </div>

                <p className="m-0 text-right text-white">
                    Copyright &copy; Ethan Torres 2020
                </p>
                    
            </footer>

           

    );
}

export default Footer;