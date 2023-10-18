import React from 'react';
import { Button, Avatar } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import styles from './style.module.scss';


function Welcome():JSX.Element {
    
    return (
        <section className={styles.Welcome}>
                <div className={styles.Welcome__textCon}>
                    <h2>
                        Tasty Meals made for You
                    </h2>
                    <p>
                    Food delivery with love: Our chefs pour their hearts into every dish, ensuring each bite is a taste of passion, care, and culinary excellence.
                    </p>
                    <Link to="/menu">
                        <Button variant="outlined" className={styles.viewBtn} color='white'>
                            View Menu
                        </Button>
                    </Link>
                </div>
                <div className={styles.Welcome__smImgLinkMenu}>
                    {/* <Avatar
                    variant="circular"
                    alt="user 1"
                    className={styles.Avatar}
                    src={lemonade}
                    size="xl"
                    />
                     <Avatar
                    variant="circular"
                    alt="user 1"
                    className={styles.Avatar}
                    src={ponehome}
                    size="xl"
                    />
                     <Avatar
                    variant="circular"
                    alt="user 1"
                    className={styles.Avatar}
                    src={fries}
                    size="xl"
                    />
                     <Avatar
                    variant="circular"
                    alt="user 1"
                    className={styles.Avatar}
                    src={ptwohome}
                    size="xl"
                    /> */}
                </div>
                <div className={styles.Welcome__imgMainBox}>
                        {/* <div className={styles.lemonade}>
                            <div>
                                <img src={lemonade} alt='lemonade'/>
                            </div>
                        </div>

                        <div className={styles.homePizza}>
                            <div>
                                <img src={ponehome} alt='pizza'/>
                            </div>
                        </div>

                        <div className={styles.secondPizza}>
                            <div>
                                <img src={ptwohome} alt='pizza'/>
                            </div>
                        </div>
                    
                        <div className={styles.fries}>
                            <div>
                                <img src={fries} alt='pizza'/>
                            </div>
                        </div> */}
                </div>
        </section>
    );
}

export default Welcome;