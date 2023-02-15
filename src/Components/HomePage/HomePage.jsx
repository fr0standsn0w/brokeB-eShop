import React, {useState} from 'react';
import s from './style.module.scss'
import FirstBlock from "./FirstBlock/FirstBlock";
import Buttons from "./Buttons/Buttons";
import OrdersCount from "./OrdersCount/OrdersCount";

const HomePage = () => {
    return (
        <>
            <div className={s.homePageContainer}>
                <div className={s.homePageBody}>
                    <FirstBlock/>
                    <Buttons/>
                </div>
                <OrdersCount/>
            </div>
        </>
    );
};



export default HomePage;
