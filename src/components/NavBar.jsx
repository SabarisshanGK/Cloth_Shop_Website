import '@styles/NavBar.css';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className='navBar-container'>
        <Link to="/" className='nav-logo'>LOGO</Link>
        <div className="nav-links">
            <NavLink to="/" className="nav-items">Home</NavLink>
            <NavLink to="/our-services" className="nav-items">Our Services</NavLink>
            <NavLink to="/about-us" className="nav-items">About Us</NavLink>
            <NavLink to="/contact-us" className="nav-items">Contact Us</NavLink>
        </div>
    </header>
  )
}

export default NavBar