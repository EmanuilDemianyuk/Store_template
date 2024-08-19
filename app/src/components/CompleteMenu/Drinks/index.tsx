import { useState } from 'react';
import { ProgressBar } from 'react-loader-spinner';
import ProductsSwipper from '../../ProductsSwipper';
import { Button, ButtonGroup } from '@material-tailwind/react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import styles from './style.module.scss';

function Drinks(): JSX.Element {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const { products: { drinks }, error, status } = useAppSelector(state => state.product);

    const nonAlcoholic = drinks.filter(item => item.type === 'non-alcoholic');
    const alcoholic = drinks.filter(item => item.type === 'alcoholic');

    const showAlcoholic = () => {
        return setIsVisible(true);
    }
    const showNonAlcoholic = () => {
        return setIsVisible(false);
    }

    return (
        <div className={styles.CategoryBlock}>
            <h3>Drinks</h3>
            <div>
                <ButtonGroup variant="outlined" size='sm'>
                    <Button
                        onClick={showNonAlcoholic}
                        className={styles.CategoryBlock__leftBtn}>
                        non-alcoholic
                    </Button>
                    <Button
                        onClick={showAlcoholic}
                        className={styles.CategoryBlock__rightBtn}>
                        alcoholic
                    </Button>
                </ButtonGroup>
            </div>
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
                            : isVisible ?
                                <ProductsSwipper products={alcoholic} />
                                :
                                <ProductsSwipper products={nonAlcoholic} />
                }
            </div>
        </div>
    );
}

export default Drinks;