import React from 'react';
import MealsMenu from './MealsMenu';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';

const CompactMenu = () => {
  return (
    <div className={styles.CompactMenu}>    
        <section>
              <MealsMenu/>
              <div className={styles.CompactMenu__flexCon}>
                <Link to="/menu">
                    <button 
                    className={styles.CompactMenu__exploreBtn}>
                      Explore Menu
                    </button>
                </Link>
              </div>
        </section>
    </div>
  );
}

export default CompactMenu;