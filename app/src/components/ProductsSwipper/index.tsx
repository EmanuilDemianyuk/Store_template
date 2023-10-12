import React from 'react';
import ProductCard from '../ProductCard';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductsSwipperProps } from '../../types/products.type';
import 'swiper/css';
import 'swiper/css/navigation';


function ProductsSwipper (props: ProductsSwipperProps) {
    const styleSwiper: { [key: string]: string } = { "--swiper-navigation-color": "#068C52" };

    const { products } = props;
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            style={styleSwiper}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            breakpoints={{
                1700:{
                    slidesPerView: 3,
                    spaceBetween: 50
                },
                1500:{
                    slidesPerView: 3,
                    spaceBetween: 50
                },
                915:{
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                865:{
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                500: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                400:{
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                0: {
                    slidesPerView: 1,
                    spaceBetween: 0
                }
            }}
            >
            {
            products?.map(card => (
            <SwiperSlide key={card.id}>
                <ProductCard 
                    id={card.id}
                    name={card.name} 
                    description={card.description} 
                    price={card.price} 
                    img={card.img} 
                    category={card.category}
                    type={card.type}
                    rating={card.rating} />
            </SwiperSlide>
            ))
            }
        </Swiper>
    );
}

export default ProductsSwipper;