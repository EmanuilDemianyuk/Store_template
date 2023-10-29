import { FC } from 'react';
import { IProduct } from '../../../typesOrInterface/interface';
import { IconButton } from '@material-tailwind/react';
import { useActions } from '../../../hooks/useActions';
import styles from './style.module.scss';

const ItemCard: FC<IProduct> = ({
  id,
  name,
  price,
  img,
}) => {
  const { remodeItem } = useActions();

  const handlerClick = () => {
    remodeItem({id});
  }

  return (
    <div key={id} className={styles.ItemCard}>
        <div className={styles.ItemCard__imgCon}>
          <img src={img} alt="logoItem"/>
        </div>
        <div className={styles.ItemCard__infoCon}>
          <div className={styles.text}>
            <span>
              <strong>{name}</strong>
            </span>
          </div>
          <div className={styles.price}>
            <p>1 <strong>×</strong> {price} $</p>
          </div>
        </div>
        <IconButton variant="text" onClick={handlerClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={styles.svg}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
        </IconButton>
    </div>
  )
}

export default ItemCard;