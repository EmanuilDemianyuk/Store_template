import React from 'react';
import { Button } from "@material-tailwind/react";
import igOne from '../../assets/img/teamone.jpeg';
import igTwo from '../../assets/img/about-ig-two.jpeg';
import igThree from '../../assets/img/about-ig-one.jpeg';
import igFour from '../../assets/img/about-ig-three.jpeg';

function SocialMedia():JSX.Element {
    return (
        <section className='container my-0 py-2 md:my-5 max-h-max max-w-screen-xl md:py-10 px-4 lg:px-8 lg:py-5'>
            <div className='flex flex-wrap justify-between items-center mb-4'>
                <h3 className='font-header text-3xl mb-3 sm:mb-0'>Tag @yumpizza!</h3>
                <div className='basis-full sm:basis-auto'>
                    <Button variant="outlined" className="rounded-full w-full sm:w-auto">
                        <a href='https://www.instagram.com/' target="_blank" rel="noreferrer">
                            Insta
                            <i className="fa-solid fa-arrow-right ms-1" style={{color: '#000000'}}></i>
                        </a>
                    </Button>
                </div>
            </div>
            <div className='flex flex-wrap justify-start'>

                <div className='basis-full sm:basis-1/2 lg:basis-1/4 p-1'>
                <figure className="relative h-72 md:h-96 w-full">
                    <img
                        className="h-full w-full rounded-xl object-cover object-center"
                        src={igOne}
                        alt="process"
                    />
                    <figcaption className="absolute bottom-4 left-2/4 w-[calc(100%-4rem)] -translate-x-2/4 rounded-xl bg-white/75 py-2 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                        <div className='text-center'>
                            <a href='https://www.instagram.com/' target="_blank" rel="noreferrer" className='font-content text-md hover:text-BrandDarkGreen'>
                                Pizza in the process
                            </a>
                        </div>
                    </figcaption>
                </figure>
                </div>

                <div className='basis-full sm:basis-1/2 lg:basis-1/4 p-1'>
                <figure className="relative h-72 md:h-96 w-full">
                    <img
                        className="h-full w-full rounded-xl object-cover object-center"
                        src={igTwo}
                        alt="share in insta"
                    />
                    <figcaption className="absolute bottom-4 left-2/4 w-[calc(100%-4rem)] -translate-x-2/4 rounded-xl bg-white/75 py-2 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                        <div className='text-center'>
                            <a href='https://www.instagram.com/' target="_blank" rel="noreferrer" className='font-content text-md hover:text-BrandDarkGreen'>
                                Take a photo
                            </a>
                        </div>
                    </figcaption>
                </figure>
                </div>

                <div className='basis-full sm:basis-1/2 lg:basis-1/4 p-1'>
                <figure className="relative h-72 md:h-96 w-full">
                    <img
                        className="h-full w-full rounded-xl object-cover object-center"
                        src={igThree}
                        alt="pizza"
                    />
                    <figcaption className="absolute bottom-4 left-2/4 w-[calc(100%-4rem)] -translate-x-2/4 rounded-xl bg-white/75 py-2 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                        <div className='text-center'>
                            <a href='https://www.instagram.com/' target="_blank" rel="noreferrer" className='font-content text-md hover:text-BrandDarkGreen'>
                                Enjoy
                            </a>
                        </div>
                    </figcaption>
                </figure>
                </div>

                <div className='basis-full sm:basis-1/2 lg:basis-1/4 p-1'>
                <figure className="relative h-72 md:h-96 w-full">
                    <img
                        className="h-full w-full rounded-xl object-cover object-center"
                        src={igFour}
                        alt="pizza on table"
                    />
                    <figcaption className="absolute bottom-4 left-2/4 w-[calc(100%-4rem)] -translate-x-2/4 rounded-xl bg-white/75 py-2 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                        <div className='text-center'>
                            <a href='https://www.instagram.com/' target="_blank" rel="noreferrer" className='font-content text-md hover:text-BrandDarkGreen'>
                                Share with friends
                            </a>
                        </div>
                    </figcaption>
                </figure>
                </div>
            </div>
        </section>
    );
}

export default SocialMedia;