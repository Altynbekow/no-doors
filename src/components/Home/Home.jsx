import cls from './Home.module.css'
import HomeHero from "./HomeHero.jsx";
import PopularProducts from "./PopularProducts.jsx";

const Home = () => {
    return (
        <div className="container">
            <HomeHero/>
            <PopularProducts/>
        </div>
    );
};

export default Home;