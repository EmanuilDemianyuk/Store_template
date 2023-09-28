import React from 'react';

function Statistics():JSX.Element {
    return (
        <section className='container mb-3 max-h-max max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4'>
            <div className='bg-white rounded-md shadow-lg md:w-10/12 lg:w-11/12 mx-auto py-2 sm:px-20 sm:py-10 flex flex-wrap text-center'>
                <div className='transition ease-in-out hover:scale-125 duration-300 basis-1/2 mb-2 lg:basis-1/4'>
                    <p className='font-logo text-2xl sm:text-4xl text-green-700'>100%</p>
                    <p className='font-content text-sm text-gray-700'>User satisfaction</p>
                </div>
                <div className='transition ease-in-out hover:scale-125 duration-300 basis-1/2 mb-2 lg:basis-1/4'>
                    <p className='font-logo text-2xl sm:text-4xl  text-green-700'>150+</p>
                    <p className='font-content text-sm text-gray-700'>Restaurants</p>
                </div>
                <div className='transition ease-in-out hover:scale-125 duration-300 basis-1/2 lg:basis-1/4'>
                    <p className='font-logo  text-2xl sm:text-4xl  text-green-700'>24/7</p>
                    <p className='font-content text-sm text-gray-700'>Customer support</p>
                </div>
                <div className='transition ease-in-out hover:scale-125 duration-300 basis-1/2 lg:basis-1/4'>
                    <p className='font-logo  text-2xl sm:text-4xl  text-green-700'>250K</p>
                    <p className='font-content text-sm text-gray-700'>Users served</p>
                </div>
            </div>
        </section>
    );
}

export default Statistics;