import React from 'react';
import Newsletter from '../../components/Newsletter';
import WetPrinting from '../../components/WetPrinting';

const Footer = () => {
  return (
    <footer className='bg-BrandFooterBg'>
      <div className='container'>
        <div className='flex justify-between border-b border-customs-borderFooter py-11 px-8'>
          <div>
            <h5 className='text-BrandDarkGreen leading-7 pb-5'>SOLUTIONS</h5>
            <a href='#' target='_blank' className='text-white block leading-7'>Marketing</a>
            <a href='#' target='_blank' className='text-white block leading-7'>Analutics</a>
            <a href='#' target='_blank' className='text-white block leading-7'>Commerce</a>
            <a href='#' target='_blank' className='text-white block leading-7'>Insights</a>
          </div>
          <div>
            <h5 className='text-BrandDarkGreen leading-7 pb-5'>SUPPORT</h5>
            <a href='#'  target='_blank' className='text-white block leading-7'>Pricing</a>
            <a href='#'  target='_blank' className='text-white block leading-7'>Documentation</a>
            <a href='#'  target='_blank' className='text-white block leading-7'>Guides</a>
            <a href='#'  target='_blank' className='text-white block leading-7'>API Status</a>
          </div>
          <div>
            <h5 className='text-BrandDarkGreen leading-7 pb-5'>COMPANY</h5>
            <a href='#'  target='_blank' className='text-white block leading-7'>About</a>
            <a href='#'  target='_blank' className='text-white block leading-7'>Blogs</a>
            <a href='#'  target='_blank' className='text-white block leading-7'>Jobs</a>
            <a href='#'  target='_blank' className='text-white block leading-7'>Press</a>
            <a href='#'  target='_blank' className='text-white block leading-7'>Partners</a>
          </div>
          <div>
            <h5 className='text-BrandDarkGreen leading-7 pb-5'>LEGAL</h5>
            <a href='#'  target='_blank' className='text-white block leading-7'>Claim</a>
            <a href='#'  target='_blank' className='text-white block leading-7'>Privacy</a>
            <a href='#'  target='_blank' className='text-white block leading-7'>Terms</a>
          </div>
          <Newsletter/>
        </div>
        <div className='flex justify-between py-10'>
          <WetPrinting/>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

