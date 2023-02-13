import React from 'react';
import s from './style.module.scss';
import g from "../../../assets/css/global.module.scss";
import {Link} from "react-router-dom";

const ForgotPassword = () => {
    return (
        <div className={s.forgotPasswordContainer}>
            <h1 className={`${g.h1} ${s.title}`}>ВОССТАНОВЛЕНИЕ<br/>ПАРОЛЯ</h1>
            <div className={s.forgotPasswordBody}>
                <input type="text"/>
                <div className={s.buttonContainer}>
                    <button>ВОЙТИ</button>
                </div>
            </div>
            <div className={s.bottomContainer}>
                <p>Забыли почту? Отправим новый пароль по номеру телефону!</p>
                <Link to={"/registration"}>ЗАРЕГИСТРИРОВАТЬСЯ</Link>
            </div>
        </div>
    );
};

export default ForgotPassword;
