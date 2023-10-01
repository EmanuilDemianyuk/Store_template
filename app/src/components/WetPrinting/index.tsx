import React from 'react';
import logofacebook  from './../../assets/svg/SocialIcons/logo-facebook.svg';
import logogithub  from './../../assets/svg/SocialIcons/logo-github.svg';
import logoinstagram  from './../../assets/svg/SocialIcons/logo-instagram.svg';
import logotwitter  from './../../assets/svg/SocialIcons/logo-twitter.svg';


const WetPrinting = ():JSX.Element => {
  return (
    <>
        <p className='text-customs-lightGreenWetPrinting'>© 2023 Dlex, Inc. All rights reserved</p>
        <div className='flex gap-8'>
            <a href='#' target='_blank'>
                <img src={logofacebook} className="" alt='socialLogo'/>
            </a>
            <a href='#' target='_blank'>
                <img src={logotwitter} className="" alt='socialLogo'/>
            </a>
            <a href='#' target='_blank'>
                <img src={logoinstagram} className="" alt='socialLogo'/>
            </a>
            <a href='#' target='_blank'>
                <img src={logogithub} className="" alt='socialLogo'/>
            </a>
        </div>
    </>
  )
}

export default WetPrinting