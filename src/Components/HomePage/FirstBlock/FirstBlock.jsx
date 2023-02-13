import React from 'react';
import s from './style.module.scss';
import './times.css'
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import {useMediaQuery} from "../../../hooks/useMediaQuery";

const FirstBlock = () => {
    const isActive_1150 = useMediaQuery('(max-width: 1150px)');
    const isActive_837 = useMediaQuery('(max-width: 837px)');
    const isActive_515 = useMediaQuery('(max-width: 837px)');

    const adaptiveClock = () => {
        if (isActive_515) {
            return ({width: 40, height: 60, fontSize: 55})
        } else if (isActive_837 === true) {
            return ({width: 55, height: 130, fontSize: 80})
        } else if (isActive_1150 === true) {
            return ({width: 95, height: 170, fontSize: 120})
        } else {
            return ({width: 135, height: 210, fontSize: 160})
        }
    }
    return (
        <div className={s.firstBlockContainer}>
            <div className={s.brandNameContainer}>
                <svg width="491" viewBox="0 0 491 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M470.003 103.543H459.623V65.5807C477.071 65.5807 473.979 62.2169 473.979 99.4588C473.979 102.582 473.096 103.543 470.003 103.543ZM464.924 49.9632H459.623V16.0851H471.329C473.537 26.657 472.654 31.7027 472.654 44.1967C472.654 48.5216 468.899 49.9632 464.924 49.9632ZM442.837 114.836C442.837 122.284 455.647 119.161 473.979 119.161C494.299 119.161 490.765 94.8936 490.765 75.4318C490.765 65.5807 486.348 60.2948 479.059 58.3726L484.581 54.5283C490.765 49.0021 488.335 38.4302 488.335 18.9683C488.335 -4.57812 464.482 0.467536 442.837 0.467536V114.836Z"
                          fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M27.3874 103.543H15.6815V65.5804C34.676 65.5804 31.1421 63.1777 31.1421 99.4584C31.1421 102.582 30.2586 103.543 27.3874 103.543ZM28.4917 48.5212L15.6815 49.9628V16.0848C32.2464 16.0848 29.8169 13.6821 29.8169 41.5534C29.8169 43.2353 28.9335 47.3198 28.4917 48.5212ZM0 119.161C51.4618 119.161 46.8236 124.446 46.8236 71.1066C46.8236 63.4179 42.1854 59.8139 36.4429 58.3722C46.3819 49.0017 45.4984 60.2944 45.4984 20.1694C45.4984 -4.81871 22.5283 0.467193 0 0.467193V119.161Z"
                          fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M129.87 98.0176C129.87 80.2376 128.103 29.7809 131.195 16.0855C153.723 16.0855 147.981 3.59148 147.981 99.4592C147.981 104.985 144.447 103.544 134.95 103.544C132.079 103.544 129.87 101.141 129.87 98.0176ZM114.188 18.9688V99.4592C114.188 122.525 132.079 119.161 146.656 119.161C157.257 119.161 163.662 112.193 163.662 100.661V16.0855C163.662 -3.37633 141.576 0.467953 128.545 0.467953C120.373 0.467953 114.188 9.59822 114.188 18.9688Z"
                          fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M83.0445 56.9308H73.989V16.085C91.4374 16.085 88.3453 12.4809 88.3453 51.4046C88.3453 54.5282 86.1366 56.9308 83.0445 56.9308ZM58.5283 119.161C78.848 119.161 73.989 127.09 73.989 71.1068H81.7193L90.9956 119.161H105.131C104.91 110.511 95.1921 74.4706 96.0756 71.1068C99.8303 65.1 103.806 63.6584 103.806 52.8463C103.806 -5.53934 108.002 0.467402 58.5283 0.467402V119.161Z"
                          fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M318.047 98.0171V20.1696C318.047 13.6823 332.403 13.6823 332.403 20.1696V99.4587C332.403 106.426 318.047 105.225 318.047 98.0171ZM302.586 18.9682V100.66C302.586 121.323 319.151 119.161 331.078 119.161C341.237 119.161 348.084 111.712 348.084 100.66V18.9682C348.084 -3.1366 330.857 0.467438 316.942 0.467438C307.666 0.467438 302.586 8.63663 302.586 18.9682Z"
                          fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M410.369 103.544C403.964 103.544 401.313 104.505 401.313 99.4591V20.1701C401.313 13.2022 415.449 14.4036 415.449 21.6117V98.0175C415.449 101.141 413.461 103.544 410.369 103.544ZM385.632 16.0855V103.544C385.632 121.083 403.964 119.161 414.124 119.161C425.167 119.161 431.13 111.232 431.13 99.4591V20.1701C431.13 -2.4153 413.903 0.467901 399.988 0.467901C392.258 0.467901 385.632 7.67604 385.632 16.0855Z"
                          fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M175.367 119.16H190.828V62.697L209.16 119.16H224.62C223.516 113.634 221.97 110.991 220.203 105.465L205.847 61.7359C205.184 57.6513 219.099 4.31136 220.866 0.467041H206.509C202.534 9.35703 195.245 47.56 191.932 55.2486L190.828 0.467041H175.367V119.16Z"
                          fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M231.246 114.836C231.246 118.199 232.13 119.16 235.001 119.16H268.793V103.543H248.032V65.5802H266.143V49.9627H248.032V16.0846H268.793V0.467041H231.246V114.836Z"
                          fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M358.466 119.161H375.252V98.0173H358.466V119.161Z" fill="white"/>
                </svg>
            </div>
            <div className={s.counterContainer}>
                <div className={s.counter}>
                    <FlipClockCountdown
                        to={'2023-04-01T00:00:00'}
                        labelStyle={{fontSize: 20, fontWeight: 400, textTransform: 'uppercase'}}
                        digitBlockStyle={adaptiveClock()}
                        dividerStyle={{color: 'black', height: 2}}
                        showSeparators={false}
                    >
                        Finished!
                    </FlipClockCountdown>
                </div>
            </div>
        </div>
    );
};

export default FirstBlock;
