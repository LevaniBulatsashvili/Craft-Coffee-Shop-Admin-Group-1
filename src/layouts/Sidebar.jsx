import { Link, useLocation} from "react-router-dom"
import styles from  './styles/Sidebar.module.css';
import React from 'react';
import { FaCoffee, FaUtensils } from 'react-icons/fa';

function Sidebar() {
  const location = useLocation();

  return (
    <aside className={styles.Sidebar}>
      <h1 className={styles.title}>Admin Console</h1>

      <nav className={styles.nav}> 
        <Link 
          className={location.pathname.includes('/coffee') ? styles.active : ''}
          to={'/coffee'} 
        > 
          <FaCoffee className={styles.icon} />
          coffee
        </Link>

        <Link 
          className={location.pathname.includes('/ingredient') ? styles.active : ''}
          to={'/ingredient'}  
        > 
          <FaUtensils className={styles.icon} />
          ingredient
        </Link>
      </nav>;
    </aside>
  ) 
}

export default Sidebar;
