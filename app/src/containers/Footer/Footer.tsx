import React from 'react';
import Newsletter from '../../components/Newsletter';
import WetPrinting from '../../components/WetPrinting';
import styles from './style.module.scss';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__mainContainer}>
        <div className={styles.footer__container}>
          <div className={styles.footer__divBox}>
            <h5 className={styles.footer__h5}>SOLUTIONS</h5>
            <a href='#' target='_blank' className={styles.footer__a}>Marketing</a>
            <a href='#' target='_blank' className={styles.footer__a}>Analutics</a>
            <a href='#' target='_blank' className={styles.footer__a}>Commerce</a>
            <a href='#' target='_blank' className={styles.footer__a}>Insights</a>
          </div>
          <div className={styles.footer__divBox}>
            <h5 className={styles.footer__h5}>SUPPORT</h5>
            <a href='#'  target='_blank' className={styles.footer__a}>Pricing</a>
            <a href='#'  target='_blank' className={styles.footer__a}>Documentation</a>
            <a href='#'  target='_blank' className={styles.footer__a}>Guides</a>
            <a href='#'  target='_blank' className={styles.footer__a}>API Status</a>
          </div>
          <div className={styles.footer__divBox}>
            <h5 className={styles.footer__h5}>COMPANY</h5>
            <a href='#'  target='_blank' className={styles.footer__a}>About</a>
            <a href='#'  target='_blank' className={styles.footer__a}>Blogs</a>
            <a href='#'  target='_blank' className={styles.footer__a}>Jobs</a>
            <a href='#'  target='_blank' className={styles.footer__a}>Press</a>
            <a href='#'  target='_blank' className={styles.footer__a}>Partners</a>
          </div>
          <div className={styles.footer__divBox}>
            <h5 className={styles.footer__h5}>LEGAL</h5>
            <a href='#'  target='_blank' className={styles.footer__a}>Claim</a>
            <a href='#'  target='_blank' className={styles.footer__a}>Privacy</a>
            <a href='#'  target='_blank' className={styles.footer__a}>Terms</a>
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

