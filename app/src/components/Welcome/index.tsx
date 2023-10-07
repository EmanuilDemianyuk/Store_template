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
        <section className='container flex justify-center flex-wrap sm:flex-nowrap text-white rounded bg-BrandDarkGreen my-10 max-h-max max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4'>
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
                <div className="flex justify-center items-center -space-x-4 sm:hidden">
                    <Avatar
                    variant="circular"
                    alt="user 1"
                    className="border-2 border-white hover:z-10 focus:z-10"
                    src={lemonade}
                    size="xl"
                    />
                     <Avatar
                    variant="circular"
                    alt="user 1"
                    className="border-2 border-white hover:z-10 focus:z-10"
                    src={ponehome}
                    size="xl"
                    />
                     <Avatar
                    variant="circular"
                    alt="user 1"
                    className="border-2 border-white hover:z-10 focus:z-10"
                    src={fries}
                    size="xl"
                    />
                     <Avatar
                    variant="circular"
                    alt="user 1"
                    className="border-2 border-white hover:z-10 focus:z-10"
                    src={ptwohome}
                    size="xl"
                    />
                </div>
                <div className='hidden sm:flex relative basis-1/2 w-full flex-wrap md:basis-3/5'>
                        <div className='flex basis-1/2 justify-center items-center'>
                            <div className='hidden p-2 bg-BrandWrapperGB rounded-full sm:block sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 overflow-hidden'>
                                <img className='w-full h-full object-fill' src={lemonade} alt='lemonade'/>
                            </div>
                        </div>

                        <div className='flex basis-1/2'>
                            <div className='hidden p-2 bg-BrandWrapperGB rounded-full sm:block sm:w-28 sm:h-28 md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-72 xl:h-72'>
                                <img className='w-full h-full object-fill' src={ponehome} alt='pizza'/>
                            </div>
                        </div>

                        <div className='flex basis-1/2'>
                            <div className='hidden p-2 bg-BrandWrapperGB rounded-full sm:block sm:w-24 sm:h-24 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-52 xl:h-52'>
                                <img className='w-full h-full object-fill' src={ptwohome} alt='pizza'/>
                            </div>
                        </div>
                    
                        <div className='flex basis-1/2 items-center'>
                            <div className='hidden p-2 bg-BrandWrapperGB rounded-full sm:block sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 overflow-hidden '>
                                <img className='w-full h-full object-fill' src={fries} alt='pizza'/>
                            </div>
                        </div>
                </div>
        </section>
    );
}

export default Welcome;