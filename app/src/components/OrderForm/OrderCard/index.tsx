import { FC } from 'react';
import { IProduct } from '../../../typesOrInterface/interface';
import { IconButton } from '@material-tailwind/react';
import { useActions } from '../../../hooks/useActions';
import styles from './style.module.scss';

const OrderCard: FC<IProduct> = ({
  id,
  name,
  price,
  img,
}) => {
  const { remodeItem } = useActions();

  const handlerClick = () => remodeItem({id});

  return (
    <li key={id} className={styles.OrderCard}>
        <div className={styles.OrderCard__block}>
            <div className={styles.OrderCard__imgBox}>
                <img src={img} alt='food' />
            </div>
            <div>
                <p className={styles.OrderCard__name}>{name}</p>
                <p className={styles.OrderCard__price}>
                    <span>1 <strong>x</strong> </span>
                    {price}$
                </p>
            </div>
            <IconButton variant="text" 
            onClick={handlerClick}
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={styles.OrderCard__iconBtn}
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
                </svg>
            </IconButton>
        </div>
    </li>
  );
}

export default OrderCard;