import { FC } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { useActions } from '../../hooks/useActions';
import { IProduct } from '../../typesOrInterface/interface';
import styles from './style.module.scss';

const ProductCard: FC<IProduct> = ({
  id,
  name,
  description,
  price,
  img,
  category,
  type,
  rating
}) => {
  const { addItem } = useActions();

  const handlerClick = () => {
    addItem({
      id,
      name,
      description,
      price,
      img,
      category,
      type,
      rating,
    })
  }

  return (
    <Card className={styles.ProductCard}>
      <CardHeader className={styles.ProductCard__CardHeader}>
        <img src={img} alt={name} />
      </CardHeader>
      <CardBody>
        <div className={styles.ProductCard__CardBody}>
          <Typography className={styles.ProductCard__ProductName}>
            {name}
          </Typography>
          <Typography>
            <span className={styles.ProductCard__ProductRating}>{rating}.0</span>
            <i
              className="fa-solid fa-star bg-BrandLightGreen p-1 rounded-full"
              style={{ color: '#068c52' }}
            ></i>
          </Typography>
        </div>
        <Typography 
        className={styles.ProductCard__ProductDesc}>
          {description}
        </Typography>
      </CardBody>
      <CardFooter className={styles.ProductCard__CardFooter}>
        <Typography variant="h4" className="text-black font-content">
          {price}$
        </Typography>
        <Button
          variant="outlined"
          className={styles.ProductCard__Button}
          onClick={handlerClick}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;