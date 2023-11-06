import { FC } from 'react';
import {
    Typography,
    IconButton,
    Drawer,
  } from "@material-tailwind/react";
import ItemCard from './ItemCard';
import DrawerNav from './DrawerNav';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import styles from './style.module.scss';

const DrawerSlide:FC = ():JSX.Element => {
  const { drawer: {openRight}, card } = useTypedSelector(state => state);
  const { handlerDrawerSlide } = useActions();

  const handlerClose = () => {
    handlerDrawerSlide(!openRight);
  }
  
  return (
    <div className={styles.drawerMainCon}>
      <Drawer
      placement="right"
      open={openRight}
      onClose={handlerClose}
      className={styles.drawer}
      overlay={false}
      size={350}
      >
        <div className={styles.container}>
          <Typography variant="h5" className={styles.Typography}>
            Cart
          </Typography>
          <IconButton variant="text" onClick={handlerClose}>
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
        <div className={styles.containerCart}>
        {
          (card.length === 0)
          ? <p className={styles.triger}>
              Your basket is empty
            </p>
          : <>
              {card.map(item => 
                <ItemCard
                  key={item.id}
                  id={item.id}
                  name={item.name} 
                  description={item.description} 
                  price={item.price} 
                  img={item.img} 
                  category={item.category}
                  type={item.type}
                  rating={item.rating}
                />)}
                <DrawerNav 
                  products={card}
                />  
            </>
          }
        </div>
      </Drawer>
    </div>
  );
}

export default DrawerSlide;