import React from 'react';
import s from './style.module.scss';

const OrdersCount = () => {
    return (
        <div className={s.orderCountContainer}>
            <span>12 980</span><span>заказов сделано на сайте</span>
        </div>
    );
};

export default OrdersCount;
