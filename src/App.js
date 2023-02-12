import React from 'react';
import './App.css';
import {createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider} from "react-router-dom";
import MainPage from "./Components/MainPage";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ProfilePage from "./Components/Profile/ProfilePage";

const Layout = () => (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
)

const App = () => {
    const routers = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout/>} >
                <Route element={<MainPage/>} path={'/'}/>
                <Route element={<MainPage/>} path={'/catalog'}/>
                <Route element={<MainPage/>} path={'/product'}/>
                <Route element={<ProfilePage/>} path={'/profile'}/>
            </Route>
        )
    )
    return (
        <RouterProvider router={routers}/>
    );
};

export default App;
