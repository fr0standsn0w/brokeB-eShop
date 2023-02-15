import React from 'react';
import clouds from "../assets/images/clouds.png";
import HomePage from "./HomePage/HomePage";
import {useLocation} from "react-router-dom";
import Catalog from "./Catalog/Catalog";
import Product from "./Product/Product";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const MainPage = () => {
    let pageURL = useLocation()
    const renderElement = () => {
        switch (pageURL.pathname) {
            case "/":
                return <HomePage/>
            case "/catalog":
                return <Catalog/>
            case "/product":
                return <Product/>
            default:
                return null
        }
    }
    return (
        <div className={"App"}>
            <div className="container">
                <Header/>
                <div className={pageURL.pathname === "/catalog" ? "mainContainerCatalog" : "mainContainer"}>
                    <div id="overlay">
                        <img id={"cloud-1"} src={clouds} width="1200" height="670" alt="animated clouds"/>
                        <img id={"cloud-2"} src={clouds} width="1200" height="670" alt="animated clouds"
                             className="clouds-delay"/>
                    </div>
                    {renderElement()}
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default MainPage;
