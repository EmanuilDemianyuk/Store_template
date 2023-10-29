import { Carousel, IconButton } from "@material-tailwind/react";
import Customer from '../Customer';
import classnames from 'classnames';
import avatarone from '../../assets/img/customer-1.jpeg';
import avatartwo from '../../assets/img/customer-2.jpeg';
import avatarthree from '../../assets/img/customer-3.jpeg';
import avatarfour from '../../assets/img/customer-4.jpeg';
import styles from './style.module.scss';
 
export function CarouselCustom():JSX.Element {
  return (
    <Carousel
      className='rounded-none'
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4 text-BrandDarkGreen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path 
            d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4 text-BrandDarkGreen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path 
            d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"
            />
          </svg>
        </IconButton>
      )}
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