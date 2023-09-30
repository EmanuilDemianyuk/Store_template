import React from 'react';
import { CarouselCustom } from '../CarouselCustom';

function Reviews():JSX.Element {
    return (
        <section className='container my-20 max-h-max max-w-screen-xl py-10 px-4 lg:px-8 lg:py-20'>
            <h3 className='font-header text-2xl md:text-4xl mb-8'>What our customers are saying</h3>
            <CarouselCustom />
        </section>
    );
}

export default Reviews;