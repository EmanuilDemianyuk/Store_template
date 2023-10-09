import React from 'react';
import MealsMenu from './MealsMenu';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard';
import pizza from '../../assets/img/events.jpeg';

const CompactMenu = () => {
  return (
    <div className='bg-BrandLightGreen'>    
        <div className='container my-0 py-2 md:my-5 max-h-max max-w-screen-xl md:py-10 px-4 lg:px-8 lg:py-2 lg:mt-20'>
            <div className='flex justify-center flex-col items-center gap-5 py-10'>
              <ProductCard name='Pizza' description='Sonedsfdshfdjshfjfsjdh' price={23} imgSrc={pizza} rating={5.0} />
              <MealsMenu/>
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
          
        </div>
    </div>
  );
}

export default CompactMenu;