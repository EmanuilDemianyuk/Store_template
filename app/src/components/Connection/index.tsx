import React from 'react';
import Location from '../Location';
import backcontact from '../../assets/img/bg-contact.jpeg';
import styles from './style.module.scss';

function Connection():JSX.Element {
    return (
        <section className={styles.Connection}>
            <div className={styles.Connection__imgBox}>
                <img src={backcontact} alt='bg-pizza'/>
            </div>
            <div className={styles.Connection__telephone}>
                <div className={styles.container}>
                    <div>
                        <h3>To place an order</h3>
                        <ul>
                            <li>
                                <i className="fa-solid fa-phone fa-xl" style={{color: "#068c52"}}></i>
                                <span className='ms-2'>(555) 555-1234</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-phone fa-xl" style={{color: "#068c52"}}></i>
                                <span className='ms-2'>(555) 555-1234</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-phone fa-xl" style={{color: "#068c52"}}></i>
                                <span className='ms-2'>(555) 555-1234</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>For comments and suggestions</h3>
                        <ul>
                            <li>
                                <i className="fa-solid fa-phone fa-xl" style={{color: "#068c52"}}></i>
                                <span className='ms-2'>(888) 888-1234</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Work schedule</h3>
                        <ul>
                            <li>
                                <i className="fa-solid fa-clock fa-xl" style={{color: "#068c52"}}></i>
                                <span className='ms-2'>10.00 - 22.00</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Email</h3>
                        <ul>
                            <li>
                                <i className="fa-solid fa-envelope fa-xl" style={{color: "#068c52"}}></i>
                                <span className='ms-2'>info@yumpizza.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Location />
        </section>
    );
}

export default Connection;