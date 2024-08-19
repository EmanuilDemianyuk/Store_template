import { ProgressBar } from 'react-loader-spinner';
import ProductsSwipper from '../../ProductsSwipper';
import { useAppSelector } from '../../../hooks/useAppSelector';
import styles from './style.module.scss';

function SideDishes(): JSX.Element {
    const { products: { side_dishes }, error, status } = useAppSelector(state => state.product);

    return (
        <div className={styles.CategoryBlock}>
            <h3>Sidedishes</h3>
            <div className={styles.dataContainer}>
                {
                    status !== "succeeded" ?
                        <ProgressBar
                            height="100"
                            width="80"
                            ariaLabel="progress-bar-loading"
                            wrapperStyle={{}}
                            wrapperClass="progress-bar-wrapper"
                            borderColor='#068C52'
                            barColor='#068C52'
                        />
                        : error ?
                            <div className={styles.CategoryBlock__error}>
                                <i className="fa-solid fa-triangle-exclamation fa-bounce fa-2xl" style={{ color: "#f83a3a" }}></i>
                                <h6>Error! Check your connection to the server.</h6>
                            </div>
                            :
                            <ProductsSwipper products={side_dishes} />
                }
            </div>
        </div>
    );
}

export default SideDishes;