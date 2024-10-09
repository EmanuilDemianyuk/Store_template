import { useEffect, useState } from 'react';
import { ProgressBar } from 'react-loader-spinner'
import ProductsSwipper from '../../ProductsSwipper';
import { CustomStepper } from '../CustomStepper';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../hooks/useAppSelector';
import styles from './style.module.scss';
import { getTopProducts } from '../../../store/slice/productSlice/utils/getTopProducts';

/**
 *  @description The component returns the products with the highest rating filtered by category 
 */
const MealsMenu = (): JSX.Element => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const { topProducts, error, status } = useAppSelector(state => state.product)
  const dispatch = useDispatch();

  const pizza = topProducts.filter(item => item.category === 'pizza');
  const sideDishes = topProducts.filter(item => item.category === 'side_dishes');
  const desserts = topProducts.filter(item => item.category === 'desserts');
  const drinks = topProducts.filter(item => item.category === 'drinks');

  useEffect(() => {
    dispatch<any>(getTopProducts(4))
  }, [dispatch]);

  return (
    <>
      <div className={styles.MealsMenu}>
        <h3>Simple Meals for You</h3>
        <div className={styles.dataContainer}>
          {
            status !== "succeeded" ?
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
                <div className={styles.MealsMenu__error}>
                  <i className="fa-solid fa-triangle-exclamation fa-bounce fa-2xl" style={{ color: "#f83a3a" }}></i>
                  <h6>Error! Check your connection to the server.</h6>
                </div>
                :
                <CustomStepper activeStep={activeStep} setActiveStep={setActiveStep} />
          }
        </div>
      </div>
      {
        activeStep === 0 ?
          <ProductsSwipper products={topProducts} />
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


