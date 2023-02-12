import React from 'react';
import s from './style.module.scss';
import g from "../../../assets/css/global.module.scss";

const Register = () => {
    return (
        <div className={s.registerContainer}>
            <h1 className={g.h1}>РЕГИСТРАЦИЯ</h1>
            <div className={s.registerBody}>
                <input type="text" placeholder={"ФИО*"}/>
                <input type="text" placeholder={"E-mail"}/>
                <input type="text" placeholder={"Почтовый индекс"}/>
                <input type="text" placeholder={"Адрес (город, улица, дом"}/>
                <input type="text" placeholder={"Логин"}/>
                <input type="text" placeholder={"Пароль"}/>
                <input type="text" placeholder={"Повторите пароль"}/>
                <div className={s.registerPoliticsContainer}>
                    <div className={s.checkBoxContainer}>
                        <input type="checkbox"/>
                        <span>Я соглашаюсь с <u>политикой конфеденциальности</u></span>
                    </div>
                    <button>ЗАРЕГИСТРИРОВАТЬСЯ</button>
                </div>
            </div>
        </div>
    );
};

export default Register;
