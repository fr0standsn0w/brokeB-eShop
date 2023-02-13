import React from 'react';
import s from './style.module.scss';
import g from "../../../assets/css/global.module.scss";
import {Link} from "react-router-dom";

const Registration = () => {
    return (
        <div className={s.registerContainer}>
            <h1 className={g.h1}>РЕГИСТРАЦИЯ</h1>
            <div className={s.registerBody}>
                <input type="text" placeholder={"ФИО*"}/>
                <input type="text" placeholder={"E-mail*"}/>
                <input type="text" placeholder={"Почтовый индекс*"}/>
                <input type="text" placeholder={"Адрес (город, улица, дом)*"}/>
                <input type="text" placeholder={"Логин*"}/>
                <input type="password" placeholder={"Пароль*"}/>
                <input type="password" placeholder={"Повторите пароль*"}/>
                <div className={s.registerPoliticsContainer}>
                    <div className={s.checkBoxContainer}>
                        <input type="checkbox"/>
                        <span>Я соглашаюсь с <u>политикой конфеденциальности</u></span>
                    </div>
                    <button>ЗАРЕГИСТРИРОВАТЬСЯ</button>
                </div>
                <Link to={"/login"} className={s.haveAccount}>УЖЕ ЕСТЬ АККАУНТ?</Link>
            </div>
        </div>
    );
};

export default Registration;
