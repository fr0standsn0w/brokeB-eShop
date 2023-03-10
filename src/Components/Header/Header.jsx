import React, {useState} from 'react';
import s from './style.module.scss';
import {Link} from "react-router-dom";
import useOutsideClick from "../../hooks/useOutsideClick";


const Header = () => {
    const [open, setOpen] = useState(false)
    const handleClickOutside = () => {
      setOpen(false)
    }
    const ref = useOutsideClick(handleClickOutside);
    return (
        <>
            <header className={s.headerContainer}>
                <div className={s.headerBody} onClick={() => setOpen(true)} ref={ref}>
                    <div className={s.logoHeaderContainer}>
                        <svg width="179" height="44" viewBox="0 0 179 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M171.046 37.6817H167.268V23.8662C173.618 23.8662 172.493 22.642 172.493 36.1952C172.493 37.332 172.171 37.6817 171.046 37.6817ZM169.197 18.1826H167.268V5.85352H171.528C172.332 9.70089 172.01 11.5371 172.01 16.084C172.01 17.6579 170.644 18.1826 169.197 18.1826V18.1826ZM161.159 41.7914C161.159 44.5021 165.821 43.3653 172.493 43.3653C179.887 43.3653 178.601 34.5339 178.601 27.4512C178.601 23.8662 176.994 21.9425 174.341 21.243L176.351 19.8439C178.601 17.8328 177.717 13.9854 177.717 6.9028C177.717 -1.66634 169.036 0.1699 161.159 0.1699V41.7914V41.7914Z"
                                  fill="white"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M9.96694 37.6819H5.70688V23.8663C12.6194 23.8663 11.3334 22.9919 11.3334 36.1954C11.3334 37.3321 11.0119 37.6819 9.96694 37.6819ZM10.3688 17.6581L5.70688 18.1827V5.85365C11.7353 5.85365 10.8511 4.97924 10.8511 15.1223C10.8511 15.7344 10.5296 17.2209 10.3688 17.6581V17.6581ZM0 43.3655C18.7282 43.3655 17.0403 45.2891 17.0403 25.8774C17.0403 23.0793 15.3523 21.7677 13.2625 21.2431C16.8795 17.8329 16.558 21.9426 16.558 7.34013C16.558 -1.75365 8.19862 0.170023 0 0.170023V43.3655V43.3655Z"
                                  fill="white"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M47.2625 35.671C47.2625 29.2004 46.6195 10.838 47.7448 5.85392C55.9434 5.85392 53.8536 1.30703 53.8536 36.1956C53.8536 38.2068 52.5675 37.6821 49.1112 37.6821C48.0663 37.6821 47.2625 36.8077 47.2625 35.671ZM41.5557 6.90319V36.1956C41.5557 44.5899 48.0663 43.3657 53.3713 43.3657C57.2295 43.3657 59.5605 40.83 59.5605 36.6328V5.85392C59.5605 -1.22873 51.5226 0.170298 46.7803 0.170298C43.8063 0.170298 41.5557 3.49303 41.5557 6.90319V6.90319Z"
                                  fill="white"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M30.2218 20.7185H26.9263V5.85373C33.2762 5.85373 32.1509 4.54212 32.1509 18.7074C32.1509 19.8441 31.3471 20.7185 30.2218 20.7185ZM21.2998 43.3655C28.6946 43.3655 26.9263 46.2511 26.9263 25.8775H29.7396L33.1155 43.3655H38.2597C38.1793 40.2177 34.6427 27.1017 34.9642 25.8775C36.3306 23.6915 37.7774 23.1669 37.7774 19.2321C37.7774 -2.0159 39.3046 0.170104 21.2998 0.170104V43.3655Z"
                                  fill="white"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M115.746 35.6708V7.34024C115.746 4.97935 120.97 4.97935 120.97 7.34024V36.1955C120.97 38.7312 115.746 38.294 115.746 35.6708ZM110.119 6.90302V36.6327C110.119 44.1525 116.148 43.3656 120.488 43.3656C124.185 43.3656 126.677 40.6549 126.677 36.6327V6.90302C126.677 -1.14147 120.408 0.170129 115.344 0.170129C111.968 0.170129 110.119 3.1431 110.119 6.90302Z"
                                  fill="white"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M149.343 37.6819C147.012 37.6819 146.048 38.0317 146.048 36.1955V7.34022C146.048 4.80446 151.192 5.24165 151.192 7.86486V35.6708C151.192 36.8075 150.469 37.6819 149.343 37.6819V37.6819ZM140.341 5.85374V37.6819C140.341 44.0651 147.012 43.3655 150.71 43.3655C154.729 43.3655 156.899 40.48 156.899 36.1955V7.34022C156.899 -0.879154 150.629 0.170114 145.565 0.170114C142.752 0.170114 140.341 2.79333 140.341 5.85374V5.85374Z"
                                  fill="white"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M63.8203 43.3654H69.4468V22.8169L76.1182 43.3654H81.7447C81.3429 41.3542 80.7802 40.3924 80.1372 38.3813L74.9126 22.4672C74.6714 20.9807 79.7353 1.56896 80.3783 0.169922H75.1537C73.7069 3.40521 71.0544 17.3082 69.8487 20.1063L69.4468 0.169922H63.8203V43.3654Z"
                                  fill="white"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M84.1562 41.7914C84.1562 43.0156 84.4778 43.3654 85.5227 43.3654H97.8206V37.6817H90.265V23.8662H96.8561V18.1826H90.265V5.85354H97.8206V0.169922H84.1562V41.7914V41.7914Z"
                                  fill="white"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M130.454 43.3659H136.563V35.6711H130.454V43.3659Z" fill="white"/>
                        </svg>
                    </div>
                    {open ?
                        <div className={s.headerLinksContainer}>
                            <Link to={"/"}>??????????????</Link>
                            <Link to={"/catalog"}>??????????????</Link>
                            <Link to={"/login"}>???????????? ??????????????</Link>
                        </div>
                        : null}
                </div>
            </header>
        </>
    );
};

export default Header;
