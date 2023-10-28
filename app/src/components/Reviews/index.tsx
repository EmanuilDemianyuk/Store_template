import { CarouselCustom } from '../CarouselCustom';
import styles from './style.module.scss';

function Reviews():JSX.Element {
    return (
        <section className={styles.Reviews}>
            <h3>What our customers are saying</h3>
            <CarouselCustom />
        </section>
    );
}

export default Reviews;