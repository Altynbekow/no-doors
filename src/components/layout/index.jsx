import React from 'react';
import Header from "./Header/index.jsx";
import Footer from "./Footer/index.jsx";
import {Outlet} from "react-router-dom";
import Content from "./Content/Content.jsx";

const Index = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Content/>
            Content
            <Footer/>
        </div>
    );
};

export default Index;