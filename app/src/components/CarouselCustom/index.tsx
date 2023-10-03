import { Carousel } from "@material-tailwind/react";
import Customer from '../Customer';
import classnames from 'classnames';
import styles from './style.module.scss';
import avatarone from '../../assets/img/customer-1.jpeg';
import avatartwo from '../../assets/img/customer-2.jpeg';
import avatarthree from '../../assets/img/customer-3.jpeg';
import avatarfour from '../../assets/img/customer-4.jpeg';
 
export function CarouselCustom() {
  return (
    <Carousel
      className='rounded-none3'
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className={styles.Carousel__container}>
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={
                classnames(styles.Carousel__navPaginations, 
                  {[styles.Carousel__elect]: activeIndex === i})
              }
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <Customer fullName='Andrew Watson' rate={5} date='Jun 25, 2023' imageSrc={avatarone} />
      <Customer fullName='Emilia Brown' rate={5} date='Aug 02, 2023' imageSrc={avatartwo} />
      <Customer fullName='Tony Wang' rate={5} date='Feb 10, 2023' imageSrc={avatarthree} />
      <Customer fullName='Lisa Larson' rate={5} date='Dec 18, 2022' imageSrc={avatarfour} />
    </Carousel>
  );
}