import React from 'react';
import './App.css';
import {createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider} from "react-router-dom";
import MainPage from "./Components/MainPage";

const Layout = () => (
    <>
        <Outlet/>
    </>
)

const App = () => {
    const routers = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout/>}>
                <Route element={<MainPage/>} path={'/'}/>
            </Route>
        )
    )
    return (
        <RouterProvider router={routers}/>
    );
};

export default App;
