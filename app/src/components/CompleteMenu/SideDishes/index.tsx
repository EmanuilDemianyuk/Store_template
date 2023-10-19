import React from 'react';
import { ProgressBar } from 'react-loader-spinner';
import { PATH__ITEM__SIDE_DISHES } from '../../../constants/urlAPI';
import { useGetProductsQuery } from '../../../store/products/products.api';
import ProductsSwipper from '../../ProductsSwipper';
import styles from './style.module.scss';

function SideDishes() {
    const { data, isLoading, error } = useGetProductsQuery(PATH__ITEM__SIDE_DISHES);

    return (
        <div className={styles.CategoryBlock}>
            <h3>Sidedishes</h3>
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
                    :
                    <ProductsSwipper products={data} />
                }
            </div>
        </div>
    );
}

export default SideDishes;