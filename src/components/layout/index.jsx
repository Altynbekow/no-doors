import React from 'react';
import Header from "./Header/index.jsx";
import Footer from "./Footer/index.jsx";
import {Outlet} from "react-router-dom";
import Content from "./Content/Content.jsx";
import Brands from "../Brands/Brands.jsx";
import HomeBrands from "../HomeBrands/HomeBrands.jsx";

const Index = () => {
    return (
        <div>
            <Header/>
            <Content/>
            <Brands/>
            <Outlet/>
            <HomeBrands/>
            <Footer/>
        </div>
    );
};

export default Index;