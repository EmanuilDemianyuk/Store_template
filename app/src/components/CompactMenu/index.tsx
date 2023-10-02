import React from 'react';
import MealsMenu from './MealsMenu';
import { Link } from 'react-router-dom';

const CompactMenu = () => {
  return (
    <div className='bg-BrandLightGreen'>    
        <div className='container flex justify-center flex-col items-center gap-5'>
            <MealsMenu/>
            <Link to="/menu">
                <button className='text-white 
                 bg-BrandDarkGreen cursor-pointer
                 rounded-full
                 hover:bg-BrandLightGreen 
                 hover:text-black
                   hover:font-medium py-2 px-6 leading-7'>Explore Menu</button>
            </Link>
        </div>
    </div>
  )
}

export default CompactMenu;