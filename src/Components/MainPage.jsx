import React from 'react';
import clouds from "../assets/images/clouds.png";
import HomePage from "./HomePage/HomePage";

const MainPage = () => {
    return (
        <div className={"App"}>
            <div className="container">
                <div className={"mainContainer"}>
                    <div id="overlay">
                        <img src={clouds} width="1200" height="670" alt="animated clouds"/>
                        <img src={clouds} width="1200" height="670" alt="animated clouds" className="clouds-delay"/>
                    </div>
                    <HomePage/>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
