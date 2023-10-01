import React from 'react';
import logofacebook  from './../../assets/svg/SocialIcons/logo-facebook.svg';
import logogithub  from './../../assets/svg/SocialIcons/logo-github.svg';
import logoinstagram  from './../../assets/svg/SocialIcons/logo-instagram.svg';
import logotwitter  from './../../assets/svg/SocialIcons/logo-twitter.svg';


const WetPrinting = ():JSX.Element => {
  return (
    <>
        <p className='text-customs-lightGreenWetPrinting font-content'>© 2023 Dlex, Inc. All rights reserved</p>
        <div className='flex gap-8'>
            <a href='https://www.facebook.com/' target='_blank'>
                <img src={logofacebook} alt='socialLogo'/>
            </a>
            <a href='https://twitter.com/' target='_blank'>
                <img src={logotwitter} alt='socialLogo'/>
            </a>
            <a href='https://www.instagram.com/' target='_blank'>
                <img src={logoinstagram} alt='socialLogo'/>
            </a>
            <a href='https://github.com/' target='_blank'>
                <img src={logogithub} alt='socialLogo'/>
            </a>
        </div>
    </>
  )
}

export default WetPrinting