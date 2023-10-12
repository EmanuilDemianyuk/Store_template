import React from 'react';
import { ProgressBar } from 'react-loader-spinner';
import { PATH__ITEM__DESSERTS } from '../../../constants/urlAPI';
import { useGetProductsQuery } from '../../../store/products/products.api';
import ProductsSwipper from '../../ProductsSwipper';
import styles from './style.module.scss';

function Desserts() {
    const { data, isLoading, error } = useGetProductsQuery(PATH__ITEM__DESSERTS);

    return (
        <div className={styles.CategoryBlock}>
            <h3>Desserts</h3>
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
    );
}

export default Desserts;