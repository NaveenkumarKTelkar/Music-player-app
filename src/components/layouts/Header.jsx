import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
     <nav className="navbar navbar-expand-md bg-primary navbar-dark">
        <div className="container">
            <NavLink to={'/'} className='navbar-brand'>MUSIC PLAYER</NavLink>

            <button className="navbar-toggler" type='button' data-bs-target="#menu"data-bs-toggle="collapse">
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className="coolapse navbar-collapse" id='menu'>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink to={'/music'} className="nav-link">Music</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/contact'} className="nav-link">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
     </nav>
    )
}

export default Header