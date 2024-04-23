import cls from './Hero.module.css'
import hero from '../../assets/chexol.png';
import pwbank from '../../assets/pwbank.png'
import iphone from '../../assets/iphone.png'
import {Button} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {useRef, useState} from "react";

const settings = {
    // infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
};


const HomeHero = () => {
    const ref = useRef(null);
    const [index, setIndex] = useState(1);
    const nextSlide = (idx) => {
        ref.current.slickNext();
        setIndex(idx)
    }
    return (
        <div className={cls.flex}>
            <Slider ref={ref} {...settings}>
                <div>
                    <div className={cls.hero__slider} style={{
                        background: `url(${iphone})  no-repeat right`,
                        backgroundColor: '#399A3A',
                        borderRadius: '5px',
                        height: 375,
                    }}>
                        <h2>Защитное стекло на<br/>
                            iPhone 11 Pro<br/>
                            по лучшей цене!</h2>
                        <Button variant={'contained'} sx={{
                            mb: '134px',
                            bgcolor: "#fff",
                            color: '#399A3A',
                            "&:hover": {bgcolor: "#fff"}
                        }}>Подробнее</Button>
                        <div style={{display: "flex", gap: '5px'}}>
                            {[1, 2,].map(el => (
                                <div onClick={() => nextSlide(el)}
                                     key={`btn${el}`}
                                     style={{
                                         width: 30,
                                         height: 5,
                                         background: index === el ? '#ffffff' : '#ffffff70',
                                         borderRadius: '100px',
                                         cursor: "pointer"
                                     }}/>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <div className={cls.hero__slider} style={{
                        background: `url(${iphone})  no-repeat right`,
                        backgroundColor: '#399A3A',
                        borderRadius: '5px',
                        height: 375,

                    }}>
                        <h2>Защитное стекло на<br/>
                            iPhone 11 Pro<br/>
                            по лучшей цене!</h2>
                        <Button variant={'contained'} sx={{
                            mb: '134px',
                            bgcolor: "#fff",
                            color: '#399A3A',
                            "&:hover": {bgcolor: "#fff"}
                        }}>Подробнее</Button>
                        <div style={{display: "flex", gap: '5px'}}>
                            {[1, 2,].map(el => (
                                <div onClick={() => nextSlide(el)}
                                     key={`btn${el}`}
                                     style={{
                                         width: 30,
                                         height: 5,
                                         background: index === el ? '#ffffff70' : '#fff',
                                         borderRadius: '100px',
                                         cursor: "pointer"
                                     }}/>
                            ))}
                        </div>
                    </div>
                </div>
            </Slider>
            <div className={cls.hero__cards}>
                <div className={cls.card} style={{background: `url(${hero})  no-repeat right`, height: 183}}>
                    <h2>Silicone Case
                        для iPhone Xr</h2>
                    <p>Подробнее</p>
                </div>
                <div className={cls.card} style={{background: `url(${pwbank})  no-repeat right`, height: 183}}>
                    <h2>PowerBank от Xiaomi
                        на 10 800 мА•ч</h2>
                    <p>Подробнее</p>
                </div>
            </div>

        </div>
    );
};

export default HomeHero;