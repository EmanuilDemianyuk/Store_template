import React from 'react';
import MealsMenu from './MealsMenu';
import { Link } from 'react-router-dom';
// import ProductCard from '../ProductCard';
// import pizza from '../../assets/img/events.jpeg';

const CompactMenu = () => {
  return (
    <div className='bg-BrandLightGreen'>    
        <section className='container my-0 py-2 md:my-5 max-h-max max-w-screen-xl md:py-10 px-4 lg:px-8 lg:py-2 lg:mt-20'>
              <MealsMenu/>
              <div className='flex justify-center items-center gap-5 py-10'>
                <Link to="/menu">
                    <button className='text-white 
                    bg-BrandDarkGreen font-content cursor-pointer
                    rounded-full
                    hover:bg-BrandLightGreen
                    hover:border-2
                    hover:border-BrandDarkGreen 
                    hover:text-BrandDarkGreen
                      hover:font-medium py-2 px-6 leading-7'>Explore Menu</button>
                </Link>
              </div>
        </section>
    </div>
  );
}

export default CompactMenu;