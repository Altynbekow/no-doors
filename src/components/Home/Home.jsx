import cls from './Home.module.css'
import HomeHero from "./HomeHero.jsx";
import PopularProducts from "./PopularProducts.jsx";
import HomeBrands from "../HomeBrands/HomeBrands.jsx";
import React from "react";

const Home = () => {
    return (
        <div className="container">
            <HomeHero/>
            <HomeBrands/>
            <PopularProducts/>
        </div>
    );
};

export default Home;