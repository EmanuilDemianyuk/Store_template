import { Button } from "@material-tailwind/react";
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
        </section>
    );
}

export default Welcome;