import React, { useState, ChangeEvent } from 'react';
import styles from './style.module.scss';


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
    <div className={styles.Newsletter}>
        <h5>SUBSCRIBE TO OUR NEWSLETTER</h5>
        <p>The latest news, articles, and resources, sent to your inbox weekly</p>
        <form onSubmit={handlerForm}>
            <input 
            type='email' 
            value={inpValue}
            onChange={handlerInput}
            minLength={1}
            maxLength={99}
            placeholder='Enter your email'
            className={styles.inputEmail}/>
            <input
            value="Subscribe"
            type='submit'
            className={styles.inputSubmit}/>
        </form>
    </div>
  )
}

export default Newsletter;