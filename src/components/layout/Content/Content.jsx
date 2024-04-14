import React from 'react';
import Logo from "../../../assets/logo.svg"
import {CiSearch} from "react-icons/ci";
import cls from "./Content.module.css"
import {BsSuitHeart} from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";


const Content = () => {
    return (
        <div className="container">
            <div style={{display: 'flex'}}>
                <img style={{marginLeft: 51}} src={Logo} alt=""/>
                {/*<div >*/}
                {/*<input className={cls.inp} type="text" placeholder="Введите поисковой запрос.."/>*/}
                {/*<button className={cls.btn}><CiSearch/>*/}
                {/*    Найти*/}
                {/*</button>*/}
                {/*</div>*/}
                <div style={{display:"flex", position:"relative"}}>
                    <input className={cls.inp} type="text" placeholder="Введите поисковой запрос.."/>
                    <button className={cls.btn}><CiSearch/>Найти</button>
                </div>
                <div className={cls.heart} style={{textAlign: "center",marginTop:43,marginLeft:66, position:"relative"}}>
                    <BsSuitHeart/>
                    <span>4</span>
                    <p>Избранное</p>
                </div>
                <div className={cls.cart} >
                    <BsCart3/>
                    <span>10</span>
                    <p>Моя корзина</p>
                </div>
            </div>
        </div>
    );
};

export default Content;