import React, { useState, ChangeEvent } from 'react';

type StyleOptions = {
  default: string;
};

const styleOptions: StyleOptions = {
  default: "text-white bg-inherit border leading-7 rounded-md py-1.5 px-3 invalid:border-red-500 invalid:text-red-500",
}

const  Newsletter = ():JSX.Element => {
  const [inpValue, setInpValue] = useState<string>('');  
  const handlerForm = (e: any) => {
    e.preventDefault();
    e.target.reset();
  }
  const handlerInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e;
    setInpValue(value);
  }
  return (
    <div className='basis-full md:basis-1/2 lg:basis-2/5'>
        <h5 className='text-BrandDarkGreen leading-7 pb-5'>SUBSCRIBE TO OUR NEWSLETTER</h5>
        <p className='text-white leading-7'>The latest news, articles, and resources, sent to your inbox weekly</p>
        <form onSubmit={handlerForm} className='flex flex-col gap-3 py-3 sm:flex-row'>
            <input 
            type='email' 
            value={inpValue}
            onChange={handlerInput}
            minLength={1}
            maxLength={99}
            placeholder='Enter your email'
            className={styleOptions.default}/>
            <input
            value="Subscribe"
            type='submit'
            className='text-white 
             bg-BrandDarkGreen cursor-pointer
             hover:bg-BrandLightGreen 
             hover:text-black
               hover:font-medium py-2 px-6 rounded-md leading-7'/>
        </form>
    </div>
  )
}

export default Newsletter;