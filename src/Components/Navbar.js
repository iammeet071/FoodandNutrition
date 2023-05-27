import React from 'react'
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css'
const Navbar = (props) => {
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');
    
        burger.addEventListener('click', () => {
    
            nav.classList.toggle('nav-active');
    
            navLinks.forEach((link,index) => {
                if(link.style.anination){
                     link.style.anination= '';
                 }
                 else{
                     link.style.anination = `navFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                 }   
        });
        burger.classList.toggle('toggle');
            
    
    
        });
       
    
    
    }
    
    // navSlide();
    return (
        <>
        <nav className='navs'>
            <div className="logo">
                <div className="imagelog" >
                <i className="fas fa-utensils-alt"></i>
                </div>
                <h4>RT's Food Guide</h4>
            </div>

            <ul className="nav-links">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/account">Account Info</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li>
        <button onClick={props.signOut} className="logout">Logout</button>
      </li>

     
    </ul>
        <div className="burger">
        <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
        </div>
        </nav>
        </>
    )
}

export default Navbar
