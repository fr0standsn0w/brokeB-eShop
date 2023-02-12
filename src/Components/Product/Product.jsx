import React, {useState} from 'react';
import s from './style.module.scss';
import placeholder from '../../assets/images/catalogItemPlaceholder.png'
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css/effect-coverflow";
import 'swiper/css';
import "./swiperStyles.css"
import ProductCard from "./ProductDescription/ProductCard";

const Product = () => {
    const [open, setOpen] = useState({
        description: true,
        video: false,
        buy: false
    })
    const changeOpenHandler = (buttonType) => {
        switch (buttonType) {
            case 0:
                setOpen({
                    description: true,
                    video: false,
                    buy: false
                })
                break
            case 1:
                setOpen({
                    description: false,
                    video: false,
                    buy: true
                })
                break
            case 2:
                setOpen({
                    description: false,
                    video: true,
                    buy: false
                })
                break
            case 3:
                setOpen({
                    description: true,
                    video: false,
                    buy: false
                })
                break
            case 4:
                setOpen({
                    description: false,
                    video: false,
                    buy: true
                })
                break
            case 5:
                setOpen({
                    description: false,
                    video: true,
                    buy: false
                })
                break
            default:
                return null
        }
    }
    return (
        <div className={s.productContainer}>
            <div className={s.productBody}>
                <nav className={s.navigation}>
                    <Swiper
                        autoHeight={false}
                        slidesPerView={3}
                        direction={"vertical"}
                        slideToClickedSlide={true}
                        allowTouchMove={false}
                        centeredSlides={true}
                        loop={true}
                        onTransitionEnd={(index)=>changeOpenHandler(index.realIndex)}
                        className={`${s.mySwiper} productMenu`}
                    >
                        <SwiperSlide>
                            <div className={s.navIconContainer} >
                                <svg width="80" height="83" viewBox="0 0 80 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M78 21.8843L40 2.26855L2 21.8843V61.1158L40 80.7315L78 61.1158V21.8843Z" stroke="white" strokeWidth="3"
                                          strokeLinejoin="round"/>
                                    <path d="M2 21.8845L40 41.5003M40 41.5003V80.7317M40 41.5003L78 21.8845M59 12.0767L21 31.6924" stroke="white"
                                          strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className={s.line}></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.navIconContainer} >
                                <svg width="58" height="60" viewBox="0 0 58 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17.4161 60C15.8196 60 14.4534 59.413 13.3175 58.239C12.1797 57.063 11.6107 55.65 11.6107 54C11.6107 52.35 12.1797 50.937 13.3175 49.761C14.4534 48.587 15.8196 48 17.4161 48C19.0126 48 20.3788 48.587 21.5147 49.761C22.6525 50.937 23.2215 52.35 23.2215 54C23.2215 55.65 22.6525 57.063 21.5147 58.239C20.3788 59.413 19.0126 60 17.4161 60ZM46.4429 60C44.8464 60 43.4802 59.413 42.3443 58.239C41.2065 57.063 40.6375 55.65 40.6375 54C40.6375 52.35 41.2065 50.937 42.3443 49.761C43.4802 48.587 44.8464 48 46.4429 48C48.0394 48 49.4065 48.587 50.5444 49.761C51.6803 50.937 52.2483 52.35 52.2483 54C52.2483 55.65 51.6803 57.063 50.5444 58.239C49.4065 59.413 48.0394 60 46.4429 60ZM12.1913 6H55.0058C56.1185 6 56.9651 6.512 57.5457 7.536C58.1262 8.562 58.1504 9.6 57.6182 10.65L47.3137 29.85C46.7816 30.85 46.0675 31.625 45.1715 32.175C44.2775 32.725 43.2983 33 42.234 33H20.609L17.4161 39H52.2483V45H17.4161C15.2391 45 13.5942 44.012 12.4815 42.036C11.3688 40.062 11.3205 38.1 12.3364 36.15L16.255 28.8L5.80536 6H0V0H9.43372L12.1913 6Z"
                                        fill="white"/>
                                </svg>
                            </div>
                            <div className={s.line}></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.navIconContainer} >
                                <svg width="73" height="75" viewBox="0 0 73 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M36.5 0C46.1804 0 55.4643 3.95088 62.3094 10.9835C69.1545 18.0161 73 27.5544 73 37.5C73 47.4456 69.1545 56.9839 62.3094 64.0165C55.4643 71.0491 46.1804 75 36.5 75C26.8196 75 17.5357 71.0491 10.6906 64.0165C3.84552 56.9839 0 47.4456 0 37.5C0 27.5544 3.84552 18.0161 10.6906 10.9835C17.5357 3.95088 26.8196 0 36.5 0ZM36.5 69.6429C44.7975 69.6429 52.7551 66.2564 58.6223 60.2284C64.4896 54.2005 67.7857 46.0248 67.7857 37.5C67.7857 28.9752 64.4896 20.7995 58.6223 14.7716C52.7551 8.74361 44.7975 5.35714 36.5 5.35714C28.2025 5.35714 20.2449 8.74361 14.3777 14.7716C8.51045 20.7995 5.21429 28.9752 5.21429 37.5C5.21429 46.0248 8.51045 54.2005 14.3777 60.2284C20.2449 66.2564 28.2025 69.6429 36.5 69.6429ZM32.5893 48.9161L49.2594 37.5L32.5893 26.0839V48.9161ZM33.4549 20.2339L53.7801 34.1571C54.3157 34.5241 54.7549 35.0212 55.0586 35.6043C55.3624 36.1875 55.5213 36.8386 55.5213 37.5C55.5213 38.1614 55.3624 38.8126 55.0586 39.3957C54.7549 39.9788 54.3157 40.4759 53.7801 40.8429L33.4549 54.7661C32.8659 55.1694 32.1815 55.401 31.4745 55.4361C30.7675 55.4712 30.0645 55.3085 29.4405 54.9654C28.8164 54.6223 28.2947 54.1116 27.9309 53.4878C27.5672 52.864 27.3751 52.1504 27.375 51.4232V23.5714C27.3751 22.8442 27.5672 22.1307 27.9309 21.5069C28.2947 20.8831 28.8164 20.3724 29.4405 20.0292C30.0645 19.6861 30.7675 19.5234 31.4745 19.5585C32.1815 19.5937 32.8659 19.8252 33.4549 20.2286V20.2339Z"
                                        fill="white"/>
                                </svg>
                            </div>
                            <div className={s.line}></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.navIconContainer} >
                                <svg width="80" height="83" viewBox="0 0 80 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M78 21.8843L40 2.26855L2 21.8843V61.1158L40 80.7315L78 61.1158V21.8843Z" stroke="white" strokeWidth="3"
                                          strokeLinejoin="round"/>
                                    <path d="M2 21.8845L40 41.5003M40 41.5003V80.7317M40 41.5003L78 21.8845M59 12.0767L21 31.6924" stroke="white"
                                          strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className={s.line}></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.navIconContainer} >
                                <svg width="58" height="60" viewBox="0 0 58 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17.4161 60C15.8196 60 14.4534 59.413 13.3175 58.239C12.1797 57.063 11.6107 55.65 11.6107 54C11.6107 52.35 12.1797 50.937 13.3175 49.761C14.4534 48.587 15.8196 48 17.4161 48C19.0126 48 20.3788 48.587 21.5147 49.761C22.6525 50.937 23.2215 52.35 23.2215 54C23.2215 55.65 22.6525 57.063 21.5147 58.239C20.3788 59.413 19.0126 60 17.4161 60ZM46.4429 60C44.8464 60 43.4802 59.413 42.3443 58.239C41.2065 57.063 40.6375 55.65 40.6375 54C40.6375 52.35 41.2065 50.937 42.3443 49.761C43.4802 48.587 44.8464 48 46.4429 48C48.0394 48 49.4065 48.587 50.5444 49.761C51.6803 50.937 52.2483 52.35 52.2483 54C52.2483 55.65 51.6803 57.063 50.5444 58.239C49.4065 59.413 48.0394 60 46.4429 60ZM12.1913 6H55.0058C56.1185 6 56.9651 6.512 57.5457 7.536C58.1262 8.562 58.1504 9.6 57.6182 10.65L47.3137 29.85C46.7816 30.85 46.0675 31.625 45.1715 32.175C44.2775 32.725 43.2983 33 42.234 33H20.609L17.4161 39H52.2483V45H17.4161C15.2391 45 13.5942 44.012 12.4815 42.036C11.3688 40.062 11.3205 38.1 12.3364 36.15L16.255 28.8L5.80536 6H0V0H9.43372L12.1913 6Z"
                                        fill="white"/>
                                </svg>
                            </div>
                            <div className={s.line}></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.navIconContainer}>
                                <svg width="73" height="75" viewBox="0 0 73 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M36.5 0C46.1804 0 55.4643 3.95088 62.3094 10.9835C69.1545 18.0161 73 27.5544 73 37.5C73 47.4456 69.1545 56.9839 62.3094 64.0165C55.4643 71.0491 46.1804 75 36.5 75C26.8196 75 17.5357 71.0491 10.6906 64.0165C3.84552 56.9839 0 47.4456 0 37.5C0 27.5544 3.84552 18.0161 10.6906 10.9835C17.5357 3.95088 26.8196 0 36.5 0ZM36.5 69.6429C44.7975 69.6429 52.7551 66.2564 58.6223 60.2284C64.4896 54.2005 67.7857 46.0248 67.7857 37.5C67.7857 28.9752 64.4896 20.7995 58.6223 14.7716C52.7551 8.74361 44.7975 5.35714 36.5 5.35714C28.2025 5.35714 20.2449 8.74361 14.3777 14.7716C8.51045 20.7995 5.21429 28.9752 5.21429 37.5C5.21429 46.0248 8.51045 54.2005 14.3777 60.2284C20.2449 66.2564 28.2025 69.6429 36.5 69.6429ZM32.5893 48.9161L49.2594 37.5L32.5893 26.0839V48.9161ZM33.4549 20.2339L53.7801 34.1571C54.3157 34.5241 54.7549 35.0212 55.0586 35.6043C55.3624 36.1875 55.5213 36.8386 55.5213 37.5C55.5213 38.1614 55.3624 38.8126 55.0586 39.3957C54.7549 39.9788 54.3157 40.4759 53.7801 40.8429L33.4549 54.7661C32.8659 55.1694 32.1815 55.401 31.4745 55.4361C30.7675 55.4712 30.0645 55.3085 29.4405 54.9654C28.8164 54.6223 28.2947 54.1116 27.9309 53.4878C27.5672 52.864 27.3751 52.1504 27.375 51.4232V23.5714C27.3751 22.8442 27.5672 22.1307 27.9309 21.5069C28.2947 20.8831 28.8164 20.3724 29.4405 20.0292C30.0645 19.6861 30.7675 19.5234 31.4745 19.5585C32.1815 19.5937 32.8659 19.8252 33.4549 20.2286V20.2339Z"
                                        fill="white"/>
                                </svg>
                            </div>
                            <div className={s.line}></div>
                        </SwiperSlide>
                    </Swiper>
                </nav>
                <div className={s.productImageContainer}>
                    <img src={placeholder} alt=""/>
                </div>
                <ProductCard state={open}/>
            </div>
        </div>
    );
};

export default Product;
