import React from 'react';
import s from './style.module.scss';
import g from "../../assets/css/global.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom";

const CabinetPage = () => {
    return (
        <div className={"App"}>
            <div className="containerAuth">
                <Header/>
                <div className={s.cabinetPageContainer}>
                    <h1 className={g.h1}>МОИ ЗАКАЗЫ</h1>
                    <div className={s.cabinetPageBody}>
                        <table className={s.table} >
                            <thead>
                            <tr>
                                <th>НОМЕР ЗАКАЗА</th>
                                <th>СТАТУС</th>
                                <th>СУММА</th>
                                <th>ДАТА</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>2380009</td>
                                <td className={s.status}>В ПУТИ</td>
                                <td>23 900 РУБ</td>
                                <td>1.02.2023</td>
                            </tr>
                            <tr>
                                <td>2380009</td>
                                <td className={s.status}>В ПУТИ</td>
                                <td>23 900 РУБ</td>
                                <td>1.02.2023</td>
                            </tr>
                            <tr>
                                <td>2380009</td>
                                <td className={s.status}>В ПУТИ</td>
                                <td>23 900 РУБ</td>
                                <td>1.02.2023</td>
                            </tr>
                            <tr>
                                <td>2380009</td>
                                <td className={s.status}>В ПУТИ</td>
                                <td>23 900 РУБ</td>
                                <td>1.02.2023</td>
                            </tr>
                            <tr>
                                <td>2380009</td>
                                <td className={s.status}>В ПУТИ</td>
                                <td>23 900 РУБ</td>
                                <td>1.02.2023</td>
                            </tr>
                            <tr>
                                <td>2380009</td>
                                <td className={s.status}>В ПУТИ</td>
                                <td>23 900 РУБ</td>
                                <td>1.02.2023</td>
                            </tr>
                            <tr>
                                <td>2380009</td>
                                <td className={s.status}>В ПУТИ</td>
                                <td>23 900 РУБ</td>
                                <td>1.02.2023</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <Link to={"/"} className={s.goToStart}>ВЕРНУТЬСЯ НА ГЛАВНУЮ СТРАНИЦУ </Link>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default CabinetPage;
