import React, { FC } from 'react';
import {
    Typography,
    IconButton,
    Drawer,
  } from "@material-tailwind/react";
import styles from './style.module.scss';
import ItemCard from './ItemCard';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import DrawerNav from './DrawerNav';

const DrawerSlide:FC = () => {
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