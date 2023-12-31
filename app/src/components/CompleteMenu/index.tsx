import Desserts from './Desserts';
import Drinks from './Drinks';
import Pizza from './Pizza';
import SideDishes from './SideDishes';
import styles from './style.module.scss';

export const CompleteMenu = ():JSX.Element => {
    return (
        <section className={styles.CompleteMenu}>
            <Pizza />
            <SideDishes />
            <Drinks />
            <Desserts />
        </section>
    );
}
