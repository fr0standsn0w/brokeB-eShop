import React from 'react';
import s from './style.module.scss';
import g from '../../../assets/css/global.module.scss'
import {Link} from "react-router-dom";

const Auth = ({setRender}) => {
    return (
        <div className={s.authContainer}>
            <h1 className={g.h1}>АВТОРИЗАЦИЯ</h1>
            <div className={s.authBody}>
                <input type="text" placeholder={"E-mail/Логин"}/>
                <input type="password" placeholder={"Пароль"}/>
                <Link>Забыли пароль?</Link>
                <div className={s.buttonContainer}>
                    <button>ВОЙТИ</button>
                </div>
            </div>
            <Link className={s.register} onClick={()=>{setRender({login: false, register: true, forgot: false})}}>ЗАРЕГИСТРИРОВАТЬСЯ</Link>
        </div>
    );
};

export default Auth;
