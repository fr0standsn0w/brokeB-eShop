import React, {useState} from 'react';
import s from './style.module.scss';
import g from '../../assets/css/global.module.scss';
import Auth from "./Auth/Auth";
import Registration from "./Register/Registration";
import {useLocation, useNavigate} from "react-router-dom";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const EnterFormPage = () => {
    const navigate = useNavigate();
    let pageURL = useLocation()
    const renderElements = () => {
        switch (pageURL.pathname) {
            case "/login":
                return <Auth/>
            case "/registration":
                return <Registration/>
            case "/forgot":
                return <ForgotPassword/>
            default:
                return <Auth/>
        }
    }
    return (
        <div className={"App"}>
            <div className="containerAuth">
                <Header/>
                <div className={s.profilePageContainer}>
                    <div className={s.profilePageBody}>
                        {pageURL.pathname === "/registration" ? <div className={s.additionalTextContainer}>
                            <h1 className={g.h1}>ИНФОРМАЦИЯ О РЕГИСТРАЦИИ</h1>
                            <p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы
                                на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы
                                использовали небезизвестный универсальный код речей.</p>
                            <p>Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце</p>
                        </div> : null}
                        <div className={s.profileBody}>
                            <div className={s.back} onClick={() => navigate(-1)}>НАЗАД</div>
                            {renderElements()}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default EnterFormPage;
