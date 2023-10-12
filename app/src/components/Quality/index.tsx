import React from 'react';
import qfood from '../../assets/img/quality.jpeg';
import pizzaprocess from '../../assets/img/process.jpeg';
import basil from '../../assets/img/basil.png';
import tomatos from '../../assets/img/tomatos.png';
import { DefaultTimeline } from '../DefaultTimeline';
import styles from './style.module.scss';

function Quality():JSX.Element {
    return (
        <section className={styles.Quality}>
            <div className={styles.Quality__Wrap}>
                <div className={styles.Quality__containerImgOne}>
                    <img
                    src={qfood}
                    alt="food"
                    />
                </div>
                <div className={styles.Quality__containerDescription}>
                    <h3>Quality Pride: our place selects the finest ingredients for Your Delight.</h3>
                    <p>
                    At our restaurant, we take pride in using only locally sourced, organic ingredients for our dishes. We believe in supporting local farmers and ensuring the freshest, most wholesome ingredients in every meal we serve.
                    </p>
                    <div className={styles.Quality__imgBox}>
                        <img src={basil} alt="basil"/>
                    </div>
                </div>
            </div>
            <div className={styles.Quality__Wrap}>
                <div className={styles.Quality__MadeToOrder}>
                    <h3>Made-to-Order: Every Dish Prepared Fresh!</h3>
                        <DefaultTimeline />
                    <div className={styles.Quality__imgBox}>
                        <img src={tomatos} alt="basil"/>
                    </div>
                </div>
                <div className={styles.Quality__pizzaProcess}>
                    <img
                    src={pizzaprocess}
                    alt="food"
                    />
                </div>
            </div>
        </section>
    );
}

export default Quality;