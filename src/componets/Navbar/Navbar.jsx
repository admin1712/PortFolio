import React, { useState } from 'react';
import  styles from "./Navbar.module.css";
import { getImageUrl } from '../../utils';
const Navbar = () => {
    const [menuOpen,setMenuOpen]=useState(false);
  return (
   <header className={styles.scrollheader}>
   <nav className={styles.navbarList}>
      <a className={styles.title} href='/'>
          Aishwarya Shinde
      </a>
      <div className={styles.menu}>
        {/* <img className={styles.menuBtn} src={
            menuOpen
            ? getImageUrl("nav/closeIcon.png")
            : getImageUrl("nav/menuBtn.png")}
         alt='menu-btn' onClick={()=>
            setMenuOpen(!menuOpen)
         }/> */}
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
         onClick={()=> setMenuOpen(false)}
        >
            <li><a href="#about">About</a></li>
            <li><a href="#Qualification">Experience</a></li>
            <li><a href="#Skills">Skills</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
   </nav>
   </header> 
  )
}

export default Navbar
