import React from 'react';
import { Button, Avatar } from "@material-tailwind/react";
import lemonade from '../../assets/img/lemonade-home.png';
import ponehome from '../../assets/img/ponehome.png';
import fries from '../../assets/img/frieshome.png';
import ptwohome from '../../assets/img/ptwohome.png';

// type Styles = {
//     backgroundItem: string
// }

function Welcome():JSX.Element {
    // const stylesToProducts: Styles = {
    //     backgroundItem: '',
    // }
    return (
        <section className='container flex justify-center sm:justify-start flex-wrap sm:flex-nowrap text-white rounded bg-BrandDarkGreen mb-5 max-h-max max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4'>
                <div className='mt-10 mb-10 sm:basis-1/2 md:basis-2/5 md:mt-24 md:mb-24 lg:basis-1/2 lg:mt-24 lg:mb-24'>
                    <h2 className='font-header text-3xl lg:text-5xl mb-3'>
                        Tasty Meals made for You
                    </h2>
                    <p className='font-content text-lg lg:text-xl mb-4'>
                    Food delivery with love: Our chefs pour their hearts into every dish, ensuring each bite is a taste of passion, care, and culinary excellence.
                    </p>
                    <Button variant="outlined" className="w-full md:w-1/2 lg:w-1/3 rounded-full font-content" color='white'>
                        View Menu
                    </Button>
                </div>
                {/* <div className='hidden sm:block sm:basis-3/5 lg:basis-1/2 relative'>

                        <div className='hidden md:block md:absolute md:w-32 md:h-32 md:top-10 md:left-10 lg:left-20 rounded-full bg-light-green'>
                            <img className='w-24 ml-2 mt-2' src={lemonade} alt='lemonade'/>
                        </div>

                        <div className='absolute top-10 -left-20 w-80 sm:w-72 sm:h-72 sm:top-10 sm:left-12 md:w-56 md:h-56 md:top-0 md:left-60 lg:left-72 rounded-full bg-light-green'>
                            <img className=' md:w-52 md:ml-2 md:mt-2' src={ponehome} alt='pizza'/>
                        </div>
                    
                        <div className='hidden md:block md:absolute md:w-40 md:h-40 md:top-44 md:left-20 lg:left-32 rounded-full bg-light-green'>
                            <img className='w-52 mt-8' src={fries} alt='pizza'/>
                        </div>

                        <div className='hidden md:block md:absolute md:w-52 md:h-52 md:top-64 md:right-0 lg:-right-5 lg:top-60 rounded-full bg-light-green'>
                            <img className='w-48 ml-2 mt-2' src={ptwohome} alt='pizza'/>
                        </div>
                </div> */}
                <div className='flex relative basis-1/2 w-full flex-wrap md:basis-3/5'>

                        <div className='flex basis-1/2 justify-center items-center'>
                            <div className='hidden p-2 bg-BrandWrapperGB rounded-full sm:block sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 overflow-hidden'>
                                <img className='w-full h-full object-fill' src={lemonade} alt='lemonade'/>
                            </div>
                        </div>

                        <div className='flex basis-1/2'>
                            <div className='hidden p-2 bg-BrandWrapperGB rounded-full sm:block sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-72 xl:h-72'>
                                <img className='w-full h-full object-fill' src={ponehome} alt='pizza'/>
                            </div>
                        </div>

                        <div className='flex basis-1/2'>
                            <div className='hidden p-2 bg-BrandWrapperGB rounded-full sm:block sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-52 xl:h-52'>
                                <img className='w-full h-full object-fill' src={ptwohome} alt='pizza'/>
                            </div>
                        </div>
                    
                        <div className='flex basis-1/2 items-center'>
                            <div className='hidden p-2 bg-BrandWrapperGB rounded-full sm:block sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 overflow-hidden '>
                                <img className='w-full h-full object-fill' src={fries} alt='pizza'/>
                            </div>
                        </div>

                        <div className='flex basis-1/2'>
                            <div className='p-2 bg-BrandWrapperGB rounded-full max-w-52 max-h-52'>
                                <img className='w-full h-full object-fill' src={ptwohome} alt='pizza'/>
                            </div>
                        </div>
                </div>
        </section>
    );
}

export default Welcome;