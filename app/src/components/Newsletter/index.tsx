import React from 'react'

const  Newsletter = ():JSX.Element => {
  return (
    <div className='basis-full md:basis-1/2 lg:basis-2/5'>
        <h5 className='text-BrandDarkGreen font-header leading-7 pb-5'>SUBSCRIBE TO OUR NEWSLETTER</h5>
        <p className='text-white font-content leading-7'>The latest news, articles, and resources, sent to your inbox weekly</p>
        <div className='flex flex-col gap-3 py-3 sm:flex-row'>
            <input 
            type='email' 
            min={1} max={99} 
            placeholder='Enter your email'
            className='text-white bg-inherit border leading-7 rounded-md py-1.5 px-3 font-content'/>
            <button
            className='text-white font-content bg-BrandDarkGreen py-2 px-6 rounded-md leading-7'>
                Subscribe
            </button>
        </div>
    </div>
  )
}

export default Newsletter;