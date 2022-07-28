import React from 'react';
// import { NavLink } from 'react-router-dom';
import "./cgclogo.png";

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>


export default function Footer() {
    return (
        <footer>
            <section className="contact-section">
                <div className="wrapper">
                    <div className="section-info">
                        <h3>Connect With Us</h3>
                        <div className="mobile-contact">
                            <div className="mobile-phone">
                                <span></span>
                                <span>(804)123-4567</span>
                            </div>
                            <div className="mobile-mail">
                                <span className="ti-email"></span>
                                <span>help@cozygamecorner.com</span>
                            </div>
                        
                <div className="mobile-social-links"> 
         <a href="https://www.facebook.com" target="_blank" aria-label="Facebook"><span className="ti-facebook"></span></a>
         
             <a href="https://www.instagram.com" target="_blank" aria-label="Instagram"><span className="ti-instagram"></span></a>
                <a href="https://www.twitter.com " target="_blank" aria-label="Twitter"><span className="ti-twitter"></span></a>
                              
                            </div>
                        </div>
                        <div className="footer-logo">
                            <img src="src/components/cgclogo.png" alt="cgc logo"/>
                        </div>
                    </div>
                </div>
            </section>
            <div className="footer-bottom"> 
                <small>Tyra Fair <a href="https://github.com/tf2164" target="_blank" aria-label="Github" className="ti-github text-main"></a> &copy; All rights reserved. Cozy Game Corner 2022</small>
            </div>
        </footer>
    )
}


