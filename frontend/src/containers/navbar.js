import React from 'react'
import '../styles/nav.css'
import {NavLink, Link} from 'react-router-dom'

export default function navbar(props) {
    return (
        <div>
            <nav>  
                <p className="logo">EZCDS</p>
                <ul className="container">  
                    <li>
                        <NavLink to={"/"} className="item">Home</NavLink>
                    </li>  
                    {props.isLoggedIn ?
                    <> 
                        <li>
                            <NavLink to={"/profile"} className="item">Profile</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/login"} className="item">Log Out</NavLink>
                        </li>  
                    </>
                    : 
                    <>
                        <li>
                            <NavLink to={"/collection"} className="item">Collection</NavLink>
                        </li>  
                        <li>
                            <NavLink to={"/login"} className="item">Log In</NavLink>
                        </li>  
                    </>
                    }
                    
                </ul>  
            </nav>

        </div>
    )
}
