import React from 'react';
import s from './style.module.scss'
import FirstBlock from "./FirstBlock/FirstBlock";
import Buttons from "./Buttons/Buttons";
import OrdersCount from "./OrdersCount/OrdersCount";

const HomePage = () => {
    return (
        <div className={s.homePageContainer}>
            <div>
                <FirstBlock/>
                <Buttons/>
            </div>
            <OrdersCount/>
        </div>
    );
};

export default HomePage;
