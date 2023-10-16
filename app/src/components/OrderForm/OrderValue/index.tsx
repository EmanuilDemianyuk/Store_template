import React from 'react';
import { Typography } from '@material-tailwind/react';
import { DELIVERY_COST, DISCOUNT } from '../../../constants/orderValues';
import { IProduct } from '../../../types/products.type';
import getTotalPrice from '../../../functions/getTotalPrice';
import styles from './style.module.scss';

interface OrderValueProps {
    deliveryMethod: boolean;
    products: IProduct[];
}

const OrderValue = (props: OrderValueProps):JSX.Element => {
    const { deliveryMethod, products } = props;
    const totalPrice = getTotalPrice(products);
    const delivery = totalPrice + DELIVERY_COST;
    const pickup = totalPrice - (totalPrice / 100 * DISCOUNT);
   
    return (
        <div>
            <Typography
            variant='h6'
            className={styles.OrderValue__Typography}
            >
                The amount of the order: {totalPrice}$
            </Typography>
            <Typography
            variant='h6'
            className={styles.OrderValue__Typography}
            >
                {
                    deliveryMethod ? 
                    (<span>Delivery cost: {DELIVERY_COST}$</span>)
                    :
                    (<span>Delivery cost: 0$</span>)
                }
            </Typography>
            <Typography
            variant='h6'
            className={styles.OrderValue__Typography}
            >
                {
                    deliveryMethod ? 
                    (<span>Discount: 0%</span>)
                    :
                    (<span>Discount: {DISCOUNT}%</span>)
                }
            </Typography>
            <div className={styles.OrderValue__blockFour}>
                <Typography
                variant='h4'
                className={styles.OrderValue__Typography}
                >
                    Total:
                </Typography>
                <Typography
                variant='h4'
                className='font-content text-orange-600'
                >
                    {
                        deliveryMethod ?
                        (`${delivery}$`)
                        :
                        (`${pickup.toFixed(2)}$`)
                    }
                </Typography>
            </div>
        </div>
    );
}

export default OrderValue;