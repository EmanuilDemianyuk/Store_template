import React from 'react';
import backcontact from '../../assets/img/bg-contact.jpeg';

function Connection():JSX.Element {
    return (
        <section className='container my-0 py-2 md:my-5 max-h-max max-w-screen-xl md:py-10 px-4 lg:px-8 lg:py-2'>
            <div className='relative w-full h-[500px]'>
                <div className='absolute top-0 left-0 w-full h-full bg-center' 
                style={{
                    width:'100%', 
                    height:'500px', 
                    backgroundImage:`url(${backcontact})`, 
                    backgroundSize:'cover', 
                    opacity:'0.2'}}>
                </div>
                <div className='absolute top-0 left-0 w-full h-full'>
                    <div className='m-4 flex flex-wrap justify-between'>
                        <div className=''>
                            <h3 className='font-header text-2xl mb-4'>To place an order</h3>
                            <ul>
                                <li className='font-content font-bold mb-4'><i className="fa-solid fa-phone fa-xl" style={{color: '#15803d'}}></i>
                                    <span className='ms-2'>(555) 555-1234</span>
                                </li>
                                <li className='font-content font-bold mb-4'><i className="fa-solid fa-phone fa-xl" style={{color: '#15803d'}}></i>
                                    <span className='ms-2'>(555) 555-1234</span>
                                </li>
                                <li className='font-content font-bold mb-4'><i className="fa-solid fa-phone fa-xl" style={{color: '#15803d'}}></i>
                                    <span className='ms-2'>(555) 555-1234</span>
                                </li>
                            </ul>
                        </div>
                        <div className=''>
                            <h3 className='font-header text-2xl mb-4'>For comments and suggestions</h3>
                            <ul>
                                <li className='font-content font-bold mb-4'><i className="fa-solid fa-phone fa-xl" style={{color: '#15803d'}}></i>
                                    <span className='ms-2'>(888) 888-1234</span>
                                </li>
                            </ul>
                        </div>
                        <div className=''>
                            <h3 className='font-header text-2xl mb-4'>Work schedule</h3>
                            <ul>
                                <li className='font-content font-bold mb-4'><i className="fa-solid fa-clock fa-xl" style={{color: '#15803d'}}></i>
                                    <span className='ms-2'>10.00 - 22.00</span>
                                </li>
                            </ul>
                        </div>
                        <div className=''>
                            <h3 className='font-header text-2xl mb-4'>Work schedule</h3>
                            <ul>
                                <li className='font-content font-bold mb-4'><i className="fa-solid fa-envelope fa-xl" style={{color: '#15803d'}}></i>
                                    <span className='ms-2'>info@yumpizza.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Connection;