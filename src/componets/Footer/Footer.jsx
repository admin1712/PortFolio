import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__bg">
            <div className="footer__container container grid">
                <div>
                    <h1 className="footer__title">Aishwarya</h1>
                    <span className="footer__subtite">Fullstack Developer</span>
                </div>

                <ul className="footer__links">
                    <li>
                        <a href="#videos" className="footer__link">Videos</a>
                        <a href="" style={{textDecoration:'none',color:'white'}}> | </a>
                        <a href="#portfolio" className="footer__link">Portfolio</a>
                        <a href="" style={{textDecoration:'none',color:'white'}}> | </a>
                        <a href="#contact" className="footer__link">Contact</a>
                    </li>
                </ul>

                <div className="footer__socials">
                    <a href="" className="footer__social" target="_blank">
                        <i className="uil uil-instagram"></i>
                    </a>

                    <a href="" className="footer__social" target="_blank">
                        <i className="uil uil-twitter"></i>
                    </a>

                    <a href="" className="footer__social" target="_blank">
                        <span className="uim-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em"><g data-name="Brand Logos"><path className="uim-primary" d="M5.00351,7H4.97535a2.23465,2.23465,0,1,1,.05658-4.45706A2.23549,2.23549,0,1,1,5.00351,7Z"></path><rect width="4" height="12" x="3.018" y="10" className="uim-primary"></rect><path className="uim-primary" d="M17.51754,10a4.47251,4.47251,0,0,0-3.5,1.70343V10h-4V22h4V16.5a2,2,0,0,1,4,0V22h4V14.5A4.5,4.5,0,0,0,17.51754,10Z"></path></g></svg></span>
                    </a>
                </div>
            </div>
             <p className="footer__copy">© Aishwarya Shinde. All rights reserved</p> 
        </div>

    </footer>
  )
}

export default Footer
