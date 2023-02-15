import React from 'react';
import s from './style.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/effect-coverflow";
import 'swiper/css';
import {EffectCoverflow, FreeMode, Mousewheel} from "swiper";
import CatalogItem from "./CatalogItem/CatalogItem";

const Catalog = () => {
    return (
        <div className={s.catalogContainer}>
            <Swiper
                slideToClickedSlide={true}
                effect={"coverflow"}
                grabCursor={true}
                slidesPerView={1}
                // spaceBetween={35}
                centeredSlides={true}
                mousewheel={{
                    sensitivity: 3.5
                }}
                freeMode={{
                    enabled: true,
                    sticky: true,
                    momentumBounce: false
                }}
                coverflowEffect={{
                    rotate: 15,
                    stretch: 15,
                    depth: 150,
                    modifier: 1,
                    slideShadows: false,
                }}
                // loop={true}
                modules={[EffectCoverflow, Mousewheel, FreeMode]}
                breakpoints={{
                    1100: {
                        slidesPerView: 5
                    },
                    768: {
                        slidesPerView: 3
                    },
                    325: {
                        slidesPerView: 1
                    }
                }}
            >
                <SwiperSlide>
                    <CatalogItem/>
                </SwiperSlide>
                <SwiperSlide>
                    <CatalogItem/>
                </SwiperSlide>
                <SwiperSlide>
                    <CatalogItem/>
                </SwiperSlide>
                <SwiperSlide>
                    <CatalogItem/>
                </SwiperSlide>
                <SwiperSlide>
                    <CatalogItem/>
                </SwiperSlide>
                <SwiperSlide>
                    <CatalogItem/>
                </SwiperSlide>
                <SwiperSlide>
                    <CatalogItem/>
                </SwiperSlide>
                <SwiperSlide>
                    <CatalogItem/>
                </SwiperSlide>
                <SwiperSlide>
                    <CatalogItem/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Catalog;
