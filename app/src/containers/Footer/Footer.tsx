import React from 'react';
import Newsletter from '../../components/Newsletter';
import WetPrinting from '../../components/WetPrinting';
import styles from './style.module.scss';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__mainContainer}>
        <div className={styles.footer__container}>
          <div>
            <h5>SOLUTIONS</h5>
            <a href='#' target='_blank'>Marketing</a>
            <a href='#' target='_blank'>Analutics</a>
            <a href='#' target='_blank'>Commerce</a>
            <a href='#' target='_blank'>Insights</a>
          </div>
          <div>
            <h5>SUPPORT</h5>
            <a href='#'  target='_blank'>Pricing</a>
            <a href='#'  target='_blank'>Documentation</a>
            <a href='#'  target='_blank'>Guides</a>
            <a href='#'  target='_blank'>API Status</a>
          </div>
          <div>
            <h5>COMPANY</h5>
            <a href='#'  target='_blank'>About</a>
            <a href='#'  target='_blank'>Blogs</a>
            <a href='#'  target='_blank'>Jobs</a>
            <a href='#'  target='_blank'>Press</a>
            <a href='#'  target='_blank'>Partners</a>
          </div>
          <div>
            <h5>LEGAL</h5>
            <a href='#'  target='_blank'>Claim</a>
            <a href='#'  target='_blank'>Privacy</a>
            <a href='#'  target='_blank'>Terms</a>
          </div>
          <Newsletter/>
        </div>
        <div className={styles.WetPrinting__container}>
          <WetPrinting/>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

