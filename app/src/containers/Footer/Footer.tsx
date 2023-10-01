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
  
}

export default Footer;

