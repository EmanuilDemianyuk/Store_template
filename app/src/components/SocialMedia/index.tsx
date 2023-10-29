import { Button } from "@material-tailwind/react";
import igOne from '../../assets/img/teamone.jpeg';
import igTwo from '../../assets/img/about-ig-two.jpeg';
import igThree from '../../assets/img/about-ig-one.jpeg';
import igFour from '../../assets/img/about-ig-three.jpeg';
import styles from './style.module.scss';

function SocialMedia():JSX.Element {
    return (
        <section className={styles.SocialMedia}>
            <div className={styles.SocialMedia__instaLinkBtn}>
                <h3>Tag @yumpizza!</h3>
                <div>
                    <Button variant="outlined" className={styles.buttonIns}>
                        <a href='https://www.instagram.com/' target="_blank" rel="noreferrer">
                            Insta
                            <i className="fa-solid fa-arrow-right ms-1" style={{color: '#000000'}}></i>
                        </a>
                    </Button>
                </div>
            </div>
            <div className={styles.SocialMedia__instaLinkContainer}>
                <div>
                    <figure>
                        <img
                            src={igOne}
                            alt="process"
                        />
                        <figcaption>
                            <div>
                                <a href='https://www.instagram.com/' target="_blank"    rel="noreferrer">
                                    Pizza in the process
                                </a>
                            </div>
                        </figcaption>
                    </figure>
                </div>

                <div>
                    <figure>
                        <img
                            src={igTwo}
                            alt="share in insta"
                        />
                        <figcaption>
                            <div>
                                <a href='https://www.instagram.com/' target="_blank"    rel="noreferrer">
                                    Take a photo
                                </a>
                            </div>
                        </figcaption>
                    </figure>
                </div>

                <div>
                    <figure>
                        <img
                            src={igThree}
                            alt="pizza"
                        />
                        <figcaption>
                            <div>
                                <a href='https://www.instagram.com/' target="_blank"    rel="noreferrer">
                                    Enjoy
                                </a>
                            </div>
                        </figcaption>
                    </figure>
                </div>

                <div>
                    <figure>
                        <img
                            src={igFour}
                            alt="pizza on table"
                        />
                        <figcaption>
                            <div>
                                <a href='https://www.instagram.com/' target="_blank"    rel="noreferrer">
                                    Share with friends
                                </a>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
}

export default SocialMedia;