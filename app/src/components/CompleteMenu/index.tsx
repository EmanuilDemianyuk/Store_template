import { useEffect } from 'react';
import Desserts from './Desserts';
import Drinks from './Drinks';
import Pizza from './Pizza';
import SideDishes from './SideDishes';
import styles from './style.module.scss';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../store/slice/productSlice/utils/getProducts';

import {
    PATH__ITEM__DESSERTS,
    PATH__ITEM__DRINKS,
    PATH__ITEM__PIZZAS,
    PATH__ITEM__SIDE_DISHES
} from '../../constants/urlAPI';

export const CompleteMenu = (): JSX.Element => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<any>(getProducts(PATH__ITEM__PIZZAS))
        dispatch<any>(getProducts(PATH__ITEM__SIDE_DISHES))
        dispatch<any>(getProducts(PATH__ITEM__DRINKS))
        dispatch<any>(getProducts(PATH__ITEM__DESSERTS))
    }, [dispatch]);

    return (
        <section className={styles.CompleteMenu}>
            <Pizza />
            <SideDishes />
            <Drinks />
            <Desserts />
        </section>
    );
}
