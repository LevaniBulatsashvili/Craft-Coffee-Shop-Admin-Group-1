import { Link } from "react-router-dom"
import styles from  './styles/Sidebar.module.css';
import React, { useState } from 'react';
import { FaCoffee, FaUtensils } from 'react-icons/fa';

function Sidebar() {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName); 
  };


  return <nav className={styles.nav}> 
    <h1 className={styles.title}>Admin Console</h1>
    
    <Link to={'/coffee'} className={`${styles.link} ${activeLink === 'coffee' ? styles.active : ''}`}
        onClick={() => handleLinkClick('coffee')}> <FaCoffee className={styles.icon} />coffee</Link>

    <Link to={'/ingredients'}  className={`${styles.link} ${activeLink === 'ingredients' ? styles.active : ''}`}
        onClick={() => handleLinkClick('ingredients')}> <FaUtensils className={styles.icon} />ingredients</Link>

  </nav>;
}

export default Sidebar;
