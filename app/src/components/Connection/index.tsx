import React from 'react';
import backcontact from '../../assets/img/bg-contact.jpeg';

type Options = {
    flexItem: string,
    h3: string,
    li:string,
}

function Connection():JSX.Element {
    const options: Options = {
        flexItem: 'basis-full md:basis-1/2 lg:basis-1/4 lg:me-0',
        h3: 'font-header text-2xl mb-2 lg:mb-4',
        li: 'font-content font-bold mb-4'
    } 
    const { flexItem, h3, li } = options;
    return (
        <section className='container my-0 py-2 md:my-5 max-h-max max-w-screen-xl md:py-10 px-4 lg:px-8 lg:py-2'>
            <div className='w-full max-h-48 lg:max-h-60 overflow-hidden'>
                <img src={backcontact} alt='bg-pizza' className='w-full h-full object-cover rounded-t-[16px]' />
            </div>
            <div className='w-11/12 mx-auto'>
                <div className='m-4 flex flex-wrap lg:flex-nowrap'>

                    <div className={flexItem}>
                        <h3 className={h3}>To place an order</h3>
                        <ul>
                            <li className={li}><i className="fa-solid fa-phone fa-xl" style={{color: "#068c52"}}></i>
                                <span className='ms-2'>(555) 555-1234</span>
                            </li>
                            <li className={li}><i className="fa-solid fa-phone fa-xl" style={{color: "#068c52"}}></i>
                                <span className='ms-2'>(555) 555-1234</span>
                            </li>
                            <li className={li}><i className="fa-solid fa-phone fa-xl" style={{color: "#068c52"}}></i>
                                <span className='ms-2'>(555) 555-1234</span>
                            </li>
                        </ul>
                    </div>

                    <div className={flexItem}>
                        <h3 className={h3}>For comments and suggestions</h3>
                        <ul>
                            <li className={li}><i className="fa-solid fa-phone fa-xl" style={{color: "#068c52"}}></i>
                                <span className='ms-2'>(888) 888-1234</span>
                            </li>
                        </ul>
                    </div>

                    <div className={flexItem}>
                        <h3 className={h3}>Work schedule</h3>
                        <ul>
                            <li className={li}><i className="fa-solid fa-clock fa-xl" style={{color: "#068c52"}}></i>
                                <span className='ms-2'>10.00 - 22.00</span>
                            </li>
                        </ul>
                    </div>

                    <div className={flexItem}>
                        <h3 className={h3}>Email</h3>
                        <ul>
                            <li className={li}><i className="fa-solid fa-envelope fa-xl" style={{color: "#068c52"}}></i>
                                <span className='ms-2'>info@yumpizza.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='h-80 xl:h-96'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.97833095939!2d-76.85514402483125!3d40.276231564179824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8c1399564d3df%3A0x4e841d4cd8de396f!2sYum%20Pizza!5e0!3m2!1suk!2sua!4v1696267349512!5m2!1suk!2sua" className='border-0 w-full h-full' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    );
}

export default Connection;