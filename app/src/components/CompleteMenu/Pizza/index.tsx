import { useState } from 'react';
import { ProgressBar } from 'react-loader-spinner';
import { PATH__ITEM__PIZZAS } from '../../../constants/urlAPI';
import { useGetProductsQuery } from '../../../store/api/products.api';
import ProductsSwipper from '../../ProductsSwipper';
import { Button, ButtonGroup } from '@material-tailwind/react';
import styles from './style.module.scss';

function Pizza():JSX.Element {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const { data, isLoading, error } = useGetProductsQuery(PATH__ITEM__PIZZAS);
    const notVegetarian = data?.filter(item => item.type === 'not-vegetarian');
    const vegetarian = data?.filter(item => item.type === 'vegetarian');

    const showVegeterian = () => {
        return setIsVisible(true);
    }
    const showNotVegeterian = () => {
        return setIsVisible(false);
    }

    return (
        <div className={styles.CategoryBlock}>
            <h3>Pizza</h3>
            <div>
                <ButtonGroup variant="outlined" size='sm'>
                    <Button 
                    onClick={showNotVegeterian} 
                    className={styles.CategoryBlock__leftBtn}>
                        not vegetarian
                    </Button>
                    <Button 
                    onClick={showVegeterian} 
                    className={styles.CategoryBlock__rightBtn}>
                        vegetarian
                    </Button>
                </ButtonGroup>
            </div>
            <div className={styles.dataContainer}>
                {
                    isLoading ?
                    <ProgressBar
                    height="100"
                    width="80"
                    ariaLabel="progress-bar-loading"
                    wrapperStyle={{}}
                    wrapperClass="progress-bar-wrapper"
                    borderColor = '#068C52'
                    barColor = '#068C52'
                    />
                    : error ?
                    <div className={styles.CategoryBlock__error}>
                        <i className="fa-solid fa-triangle-exclamation fa-bounce fa-2xl" style={{color: "#f83a3a"}}></i>
                        <h6>Error! Check your connection to the server.</h6>
                    </div>
                    :  isVisible ? 
                    <ProductsSwipper products={vegetarian} /> 
                    : 
                    <ProductsSwipper products={notVegetarian} />
                }
            </div>
        </div>
    );
}

export default Pizza;