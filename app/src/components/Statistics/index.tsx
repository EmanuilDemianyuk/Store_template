import styles from './style.module.scss';

function Statistics():JSX.Element {
    return (
        <section className={styles.Statistics}>
            <div className={styles.Statistics__container}>
                <div>
                    <p className={styles.title}>100%</p>
                    <p className={styles.desc}>User satisfaction</p>
                </div>

                <div>
                    <p className={styles.title}>150+</p>
                    <p className={styles.desc}>Restaurants</p>
                </div>

                <div>
                    <p className={styles.title}>24/7</p>
                    <p className={styles.desc}>Customer support</p>
                </div>

                <div>
                    <p className={styles.title}>250K</p>
                    <p className={styles.desc}>Users served</p>
                </div>
            </div>
        </section>
    );
}

export default Statistics;