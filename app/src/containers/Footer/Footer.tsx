import React from 'react';
import Newsletter from '../../components/Newsletter';
import WetPrinting from '../../components/WetPrinting';

type Options = {
  divContainer: string,
  h5: string,
  a:string
}
const Footer = () => {
  const options: Options = {
    divContainer: 'basis-full md:basis-1/2 lg:basis-1/6',
    h5: 'text-BrandDarkGreen leading-7 pb-3 font-header',
    a: 'text-white block leading-7 font-content'
  } 
  const { divContainer, h5, a } = options;
  return (
    <footer className='bg-BrandFooterBg'>
      <div className='container max-h-max max-w-screen-xl py-10 px-4 lg:px-8 lg:py-20'>
        <div className='flex flex-wrap justify-start lg:flex-nowrap lg:justify-between border-b border-customs-borderFooter py-11 px-8'>
          <div className={divContainer}>
            <h5 className={h5}>SOLUTIONS</h5>
            <a href='#' target='_blank' className={a}>Marketing</a>
            <a href='#' target='_blank' className={a}>Analutics</a>
            <a href='#' target='_blank' className={a}>Commerce</a>
            <a href='#' target='_blank' className={a}>Insights</a>
          </div>
          <div className={divContainer}>
            <h5 className={h5}>SUPPORT</h5>
            <a href='#'  target='_blank' className={a}>Pricing</a>
            <a href='#'  target='_blank' className={a}>Documentation</a>
            <a href='#'  target='_blank' className={a}>Guides</a>
            <a href='#'  target='_blank' className={a}>API Status</a>
          </div>
          <div className={divContainer}>
            <h5 className={h5}>COMPANY</h5>
            <a href='#'  target='_blank' className={a}>About</a>
            <a href='#'  target='_blank' className={a}>Blogs</a>
            <a href='#'  target='_blank' className={a}>Jobs</a>
            <a href='#'  target='_blank' className={a}>Press</a>
            <a href='#'  target='_blank' className={a}>Partners</a>
          </div>
          <div className={divContainer}>
            <h5 className={h5}>LEGAL</h5>
            <a href='#'  target='_blank' className={a}>Claim</a>
            <a href='#'  target='_blank' className={a}>Privacy</a>
            <a href='#'  target='_blank' className={a}>Terms</a>
          </div>
          <Newsletter/>
        </div>
        <div className='flex justify-between items-center py-10 flex-col sm:flex-row sm: space-y-2'>
          <WetPrinting/>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

