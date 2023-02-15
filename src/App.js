import React from 'react';
import './App.css';
import {createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider} from "react-router-dom";
import MainPage from "./Components/MainPage";
import EnterFormPage from "./Components/Profile/EnterFormPage";
import CabinetPage from "./Components/CabinetPage/CabinetPage";

const Layout = () => (
    <>
        <Outlet/>
    </>
)

const App = () => {
    const routers = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout/>} >
                <Route element={<MainPage/>} path={'/'}/>
                <Route element={<MainPage/>} path={'/catalog'}/>
                <Route element={<MainPage/>} path={'/product'}/>
                <Route element={<EnterFormPage/>} path={'/login'}/>
                <Route element={<EnterFormPage/>} path={'/registration'}/>
                <Route element={<EnterFormPage/>} path={'/forgot'}/>
                <Route element={<CabinetPage/>} path={'/profile'}/>
            </Route>
        )
    )
    return (
        <RouterProvider router={routers}/>
    );
};

export default App;
