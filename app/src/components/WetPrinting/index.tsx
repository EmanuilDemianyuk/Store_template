import logofacebook  from './../../assets/svg/SocialIcons/logo-facebook.svg';
import logogithub  from './../../assets/svg/SocialIcons/logo-github.svg';
import logoinstagram  from './../../assets/svg/SocialIcons/logo-instagram.svg';
import logotwitter  from './../../assets/svg/SocialIcons/logo-twitter.svg';
import styles from './style.module.scss';

const WetPrinting = ():JSX.Element => {
  return (
    <div className={styles.WetPrinting}>
        <p>© 2023 All rights reserved</p>
        <div>
            <a href='https://www.facebook.com/' target='_blank' rel="noreferrer">
                <img src={logofacebook} alt='socialLogo' />
            </a>
            <a href='https://twitter.com/' target='_blank' rel="noreferrer">
                <img src={logotwitter} alt='socialLogo'/>
            </a>
            <a href='https://www.instagram.com/' target='_blank' rel="noreferrer">
                <img src={logoinstagram} alt='socialLogo'/>
            </a>
            <a href='https://github.com/' target='_blank' rel="noreferrer">
                <img src={logogithub} alt='socialLogo'/>
            </a>
        </div>
    </div>
  )
}

export default WetPrinting