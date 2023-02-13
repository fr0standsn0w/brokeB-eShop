import React from 'react';
import s from './style.module.scss'
import {Link} from "react-router-dom";
const Buttons = () => {
    return (
        <div className={s.buttonContainer}>
            <Link to={'/profile'}>Мои заказы</Link>
            <Link to={'/catalog'}>Каталог</Link>
        </div>
    );
};

export default Buttons;
