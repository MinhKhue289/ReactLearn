import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu((prev) => !prev); // Toggle the mobileMenu state
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      
      <img src={menu_icon} alt="Menu" className="menu-icon" onClick={toggleMenu} />
      <ul className={mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}>
        <li><Link to="hero" smooth={true} offset={0} duration={500} onClick={toggleMenu}>Home</Link></li>
        <li><Link to="program" smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Program</Link></li>
        <li><Link to="about" smooth={true} offset={-150} duration={500} onClick={toggleMenu}>About us</Link></li>
        <li><Link to="campus" smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Campus</Link></li>
        <li><Link to="testimonials" smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Testimonials</Link></li>
        <li>
          <Link to="contact" smooth={true} offset={-260} duration={500} className="btn" onClick={toggleMenu}>Contact us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;