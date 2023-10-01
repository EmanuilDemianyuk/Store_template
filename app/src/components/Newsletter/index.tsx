import React from 'react'

const  Newsletter = ():JSX.Element => {
  return (
    <div>
        <h5 className='text-BrandDarkGreen leading-7 pb-5'>SUBSCRIBE TO OUR NEWSLETTER</h5>
        <p className='text-white leading-7'>The latest news, articles, and resources, sent to your inbox weekly</p>
        <div className='flex gap-3 py-3'>
            <input 
            type='email' 
            min={1} max={99} 
            placeholder='Enter your email'
            className='text-white bg-inherit border leading-7 rounded-md py-1.5 px-3'/>
            <button
            className='text-white bg-BrandDarkGreen py-2 px-6 rounded-md leading-7'>
                Subscribe
            </button>
        </div>
    </div>
  )
}

export default Newsletter;