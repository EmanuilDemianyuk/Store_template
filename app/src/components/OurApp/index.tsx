import React from 'react';
import { Button } from "@material-tailwind/react";
import google from '../../assets/img/gpIcon.png';
import apple from '../../assets/img/apsIcon.png';
import phone from '../../assets/img/phone.png';
import styles from './style.module.scss';

function OurApp():JSX.Element {
    return (
       <section className={styles.OurApp}>
            <div className={styles.OurApp__container}>
                <div className={styles.textBox}>
                    <h3>
                        Meals on the Go!!!
                    </h3>
                    <p>
                        By downloading our food delivery app, you gain access   toexclusive deals, discounts, and a world of culinary delights. Stay updated on current promotions, explore diverse menus, andenjoy a seamless ordering experience, all at your fingertips.
                    </p>
                    <div>
                        <div>
                            <a href='https://play.google.com/' target='_blanck'>
                                <Button
                                size="sm"
                                className={styles.textBtn}>
                                    <img src={google} alt="google" className="h-6 w-6" />
                                    Google Play
                                </Button>
                            </a>
                        </div>
                        <div>
                            <a href='https://www.apple.com/ua/app-store/' target='_blanck'>
                                <Button
                                size="sm"
                                className={styles.textBtn}>
                                    <img src={apple} alt="apple" className="h-6 w-6" />
                                    App Store
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.promptMessage}>
                    <figure>
                        <img
                        src={phone} alt="phone"
                        />
                        <figcaption>
                            <div>
                                <p className={styles.title}>
                                    14 item has been added to a cart
                                </p>
                                <p className={styles.message}>
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