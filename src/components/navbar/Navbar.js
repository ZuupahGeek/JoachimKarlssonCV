import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Headshot from '../../assets/navbar-headshot.png'
import { HashLink } from 'react-router-hash-link';








const Navbar = () => {
  
  return (
    <nav className='navbar'>
      <div className='navbar-header'>
        <img src={Headshot} alt="" />
      </div>
      <div className='navbar-name'>
        <h1>Joachim Karlsson</h1>
      </div>
      <div className='navbar-socials'>
        <Link to="https://linkedin.com" target={'_blank'}><i className="fa-brands fa-linkedin-in"></i></Link>
        <Link to="https://github.com/ZuupahGeek" target={'_blank'}><i className="fa-brands fa-github"></i></Link>
        <Link to="https://www.instagram.com/trumpet_joche/" target={'_blank'}><i className="fa-brands fa-instagram"></i></Link>
      </div>
      <ul className='navbar-links'>
        <li>
          <HashLink smooth to="/#home">
            <i className="fa-solid fa-house"></i> <span>Home</span>
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#about">
            <i className="fa-solid fa-user"></i> <span>About</span>
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#resume">
            <i className="fa-solid fa-file"></i> <span>Resume</span>
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#about">
            <i className="fa-solid fa-briefcase"></i> <span>Projects</span>
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#about">
            <i className="fa-solid fa-address-card"></i> <span>Contact</span> 
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}


export default Navbar