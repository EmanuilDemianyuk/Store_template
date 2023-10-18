import { useState } from 'react';
import { ProgressBar } from  'react-loader-spinner'
import { useGetTopProductsQuery } from '../../../store/products/products.api';
import ProductsSwipper from '../../ProductsSwipper';
import { CustomStepper } from '../CustomStepper';
import styles from './style.module.scss';

const MealsMenu = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const { data, isLoading, error } = useGetTopProductsQuery(5);
  const pizza = data?.filter(item => item.category === 'pizza');
  const sideDishes = data?.filter(item => item.category === 'side-dishes');
  const desserts = data?.filter(item => item.category === 'desserts');
  const drinks = data?.filter(item => item.category === 'drinks');

  return (
    <>
        <div className={styles.MealsMenu}>
          <h3>Simple Meals for You</h3>
          <div className={styles.dataContainer}>
            {
            isLoading ? 
              <ProgressBar
              height="100"
              width="80"
              ariaLabel="progress-bar-loading"
              wrapperStyle={{}}
              wrapperClass="progress-bar-wrapper"
              borderColor="#068C52"
              barColor="#068C52"
              />
              : error ? 
              <div>
                <h1>Error</h1>
              </div>
              :
              <CustomStepper activeStep={activeStep} setActiveStep={setActiveStep} />
            }
          </div>
        </div>
          {
            activeStep === 0 ? 
              <ProductsSwipper products={data} />
            :
            <></>
          }
          {
            activeStep === 1 ? 
              <ProductsSwipper products={pizza} />
            :
            <></>
          }
          {
            activeStep === 2 ? 
              <ProductsSwipper products={sideDishes} />
            :
            <></>
          }
          {
            activeStep === 3 ? 
              <ProductsSwipper products={drinks} />
            :
            <></>
          }
          {
            activeStep === 4 ? 
              <ProductsSwipper products={desserts} />
            :
            <></>
          }
       
    </>
  );
}

export default MealsMenu;


