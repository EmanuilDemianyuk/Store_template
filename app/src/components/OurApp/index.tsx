import React from 'react';
import { Button } from "@material-tailwind/react";
import google from '../../assets/img/gpIcon.png';
import apple from '../../assets/img/apsIcon.png';
import phone from '../../assets/img/phone.png';

function OurApp():JSX.Element {
    return (
        <section className='container bg-green-300 mt-20 max-h-max max-w-screen-xl py-10 px-4 lg:px-8 lg:py-20'>
            <div className='flex flex-wrap justify-between items-center'>
                <div className='basis-full md:basis-1/2'>
                    <h3 className='font-header text-4xl mb-2'>
                        Meals on the Go!!!
                    </h3>
                    <p className='font-content text-lg mb-5'>
                    By downloading our food delivery app, you gain access to exclusive deals, discounts, and a world of culinary delights. Stay updated on current promotions, explore diverse menus, and enjoy a seamless ordering experience, all at your fingertips.
                    </p>
                    <div className='flex flex-wrap items-center space-x-2'>
                        <div className=''>
                            <Button
                            size="md"
                            className="flex items-center gap-3 rounded-full">
                                <img src={google} alt="google" className="h-6 w-6" />
                                Google Play
                            </Button>
                        </div>
                        <div className=''>
                            <Button
                            size="md"
                            className="flex items-center gap-3 rounded-full">
                                <img src={apple} alt="apple" className="h-6 w-6" />
                                App Store
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='basis-full mt-2 md:basis-1/2 md:mt-0'>
                <figure className="relative h-full w-full">
                    <img
                    className="w-80 md:w-[450px] mx-auto"
                    src={phone} alt="phone"
                    />
                    <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                    <div>
                        <p className='font-content text-lg lg:text-2xl'>
                            14 item has been added to a cart
                        </p>
                        <p className="mt-1 md:mt-2 font-content text-gray-600">
                            30m ago
                        </p>
                    </div>
                        <div className='mx-2'>
                            <i className="fa-solid fa-ellipsis fa-xl" style={{color: "#8c8c8c",}}></i>
                        </div>
                    </figcaption>
                </figure>
                </div>
            </div>
        </section>
    );
}

export default OurApp;