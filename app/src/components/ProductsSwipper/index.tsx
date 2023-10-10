import React from 'react';
import ProductCard from '../ProductCard';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IProduct } from '../../types/products.type';
import 'swiper/css';
import 'swiper/css/navigation';

interface ProductsSwipperProps {
    products: IProduct[] | undefined;
}

function ProductsSwipper (props: ProductsSwipperProps) {
    const { products } = props;
    return (
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        style={{"--swiper-navigation-color": "#068C52"}}
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        navigation
        breakpoints={{
            1700:{
                slidesPerView: 3,
                spaceBetween: 30
            },
            1500:{
                slidesPerView: 3,
                spaceBetween: 30
            },
            1000:{
                slidesPerView: 3,
                spaceBetween: 30
            },
            865:{
                slidesPerView: 2,
                spaceBetween: 10
            },
            639: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            400:{
                slidesPerView: 1,
                spaceBetween: 10
            },
            0: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            
             
            
             
             
            
            // 320: {
            //     slidesPerView: 2,
            //     spaceBetween: 20
            // },
            //   // when window width is >= 480px
            // 480: {
            //     slidesPerView: 3,
            //     spaceBetween: 30
            // },
            // 0: {
            //     slidesPerView: 1,
            //     spaceBetween: 10,
            // }
        }}
        >
        {
        products?.map(card => (
          <SwiperSlide key={card.id}>
              <ProductCard 
                name={card.name} 
                description={card.description} 
                price={card.price} 
                imgSrc={card.img} 
                rating={card.rating} />
          </SwiperSlide>
        ))
        }
      </Swiper>
    );
}

export default ProductsSwipper;