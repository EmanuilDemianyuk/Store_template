import { useState } from 'react';
import { ProgressBar } from 'react-loader-spinner';
import { PATH__ITEM__DRINKS } from '../../../constants/urlAPI';
import { useGetProductsQuery } from '../../../store/products/products.api';
import ProductsSwipper from '../../ProductsSwipper';
import { Button, ButtonGroup } from '@material-tailwind/react';
import styles from './style.module.scss';

function Drinks() {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const { data, isLoading, error } = useGetProductsQuery(PATH__ITEM__DRINKS);
    const nonAlcoholic = data?.filter(item => item.type === 'non-alcoholic');
    const alcoholic = data?.filter(item => item.type === 'alcoholic');

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
                    <div>
                        <h1>Error</h1>
                    </div>
                    :  isVisible ? 
                    <ProductsSwipper products={alcoholic} /> 
                    : 
                    <ProductsSwipper products={nonAlcoholic} />
                }
            </div>
        </div>
    );
}

export default Drinks;