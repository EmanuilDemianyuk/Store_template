import React from 'react'

const  Newsletter = ():JSX.Element => {
  // const handlerForm = (e: React.DOMAttributes<HTMLFormElement>) => {
  //   e.preventDefault();
  //   e.target.reset();
    
  // }
  return (
    <div className='basis-full md:basis-1/2 lg:basis-2/5'>
        <h5 className='text-BrandDarkGreen leading-7 pb-5'>SUBSCRIBE TO OUR NEWSLETTER</h5>
        <p className='text-white leading-7'>The latest news, articles, and resources, sent to your inbox weekly</p>
        <form className='flex flex-col gap-3 py-3 sm:flex-row' >
            <input 
            type='email' 
            minLength={1}
            maxLength={99}
            placeholder='Enter your email'
            className='text-white bg-inherit border leading-7 rounded-md py-1.5 px-3
            invalid:border-red-500'/>
            <input 
            type='submit'
            value="Subscribe"
            className='text-white bg-BrandDarkGreen py-2 px-6 rounded-md leading-7 cursor-pointer 
            hover:bg-BrandLightGreen hover:text-black'/>
        </form>
    </div>
  )
}

export default Newsletter;