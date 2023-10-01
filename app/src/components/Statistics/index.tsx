import React from 'react';

type Options = {
    flexItem: string,
    title: string,
    desc: string
}

function Statistics():JSX.Element {
    const options: Options = {
        flexItem: 'transition ease-in-out hover:scale-125 duration-300 basis-1/2 mb-2 lg:basis-1/4',
        title: 'font-logo text-2xl sm:text-4xl text-BrandDarkGreen',
        desc: 'font-content text-sm text-gray-700'
    }
    const { flexItem, title, desc } = options;
    return (
        <section className='container mb-3 max-h-max max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4'>
            <div className='bg-white rounded-md shadow-lg md:w-10/12 lg:w-11/12 mx-auto py-2 sm:px-20 sm:py-10 flex flex-wrap text-center'>
                <div className={flexItem}>
                    <p className={title}>100%</p>
                    <p className={desc}>User satisfaction</p>
                </div>

                <div className={flexItem}>
                    <p className={title}>150+</p>
                    <p className={desc}>Restaurants</p>
                </div>

                <div className={flexItem}>
                    <p className={title}>24/7</p>
                    <p className={desc}>Customer support</p>
                </div>

                <div className={flexItem}>
                    <p className={title}>250K</p>
                    <p className={desc}>Users served</p>
                </div>
            </div>
        </section>
    );
}

export default Statistics;