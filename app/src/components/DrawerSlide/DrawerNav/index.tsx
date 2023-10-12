import { FC } from 'react';
import { ProductsSwipperProps } from '../../../types/products.type';
import styles from './style.module.scss';
import { Link } from 'react-router-dom';

const DrawerNav:FC<ProductsSwipperProps> = ({products}):JSX.Element => {
  const totalPrice = products?.map(item => item.price).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
 
  return (
    <div className={styles.DrawerNav}>   
        <div className={styles.DrawerNav__amount}>
            <p>Total: {totalPrice} $</p>
        </div>
        <div className={styles.DrawerNav__btnCon}>
           <Link to='/checkout'>
            <button>
                To order
            </button>
           </Link>
        </div>
    </div>
  )
}

export default DrawerNav;