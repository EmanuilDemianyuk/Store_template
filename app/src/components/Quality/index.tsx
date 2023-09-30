import React from 'react';
import qfood from '../../assets/img/quality.jpeg';
import pizzaprocess from '../../assets/img/process.jpeg';
import basil from '../../assets/img/basil.png';
import tomatos from '../../assets/img/tomatos.png';
import { DefaultTimeline } from '../DefaultTimeline';

function Quality():JSX.Element {
    return (
        <section className='container my-0 py-2 md:my-5 max-h-max max-w-screen-xl md:py-10 px-4 lg:px-8 lg:py-5'>
            <div className='flex flex-wrap items-center mb-5'>
                <div className='mb-5 md:mb-0 basis-full h-80 md:h-[350px] lg:h-[450px] md:basis-1/2'>
                    <img
                    className="h-full w-full rounded-xl object-cover object-center"
                    src={qfood}
                    alt="food"
                    />
                </div>
                <div className='basis-full md:basis-1/2'>
                    <h3 className='font-header md:text-xl lg:text-2xl md:px-10 mb-5'>Quality Pride: our place selects the finest ingredients for Your Delight.</h3>
                    <p className='font-content md:text-base lg:text-lg md:px-10'>
                    At our restaurant, we take pride in using only locally sourced, organic ingredients for our dishes. We believe in supporting local farmers and ensuring the freshest, most wholesome ingredients in every meal we serve.
                    </p>
                    <div className='flex justify-center'>
                        <img src={basil} alt="basil" className='w-28 md:w-32 lg:w-52' />
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap items-center mb-5'>
                <div className='mt-5 md:mt-0 basis-full order-2 md:order-1 md:basis-1/2'>
                    <h3 className='font-header md:text-xl lg:text-2xl pe-10 mb-5'>Made-to-Order: Every Dish Prepared Fresh!</h3>
                    <DefaultTimeline />
                    <div className='flex justify-center'>
                        <img src={tomatos} alt="basil" className='w-28 md:w-32 lg:w-52' />
                    </div>
                </div>
                <div className='basis-full order-1 md:order-2 h-80 md:h-[550px] lg:h-[650px] md:basis-1/2'>
                    <img
                    className="h-full w-full rounded-xl object-cover object-center"
                    src={pizzaprocess}
                    alt="food"
                    />
                </div>
            </div>
        </section>
    );
}

export default Quality;