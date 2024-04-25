import React from 'react';
import Logo from "../../../assets/logo.svg"
import {CiSearch} from "react-icons/ci";
import cls from "./Content.module.css"
import {BsSuitHeart} from "react-icons/bs";
import {BsCart3} from "react-icons/bs";

import {useSelector} from "react-redux"
import {Link} from "react-router-dom";


const Content = () => {
    const cart = useSelector(state => state.cart.items)
    const like = useSelector(state => state.like.item)
    return (
        <div className="container">
            <div style={{display: 'flex'}}>
                <Link to={"/"}>
                    <img style={{marginLeft: 51, marginTop: 20}} src={Logo} alt=""/>
                </Link>
                <div style={{display: "flex", position: "relative"}}>
                    <input className={cls.inp} type="text" placeholder="Введите поисковой запрос.."/>
                    <button className={cls.btn}><CiSearch/>Найти</button>
                </div>
                <div className={cls.heart}
                     style={{textAlign: "center", marginTop: 43, marginLeft: 66, position: "relative"}}>
                    <BsSuitHeart/>
                    <span>{like.length}</span>
                    <p>Избранное</p>
                </div>
                <div className={cls.cart}>
                    <Link to={"/cart"}>
                        <BsCart3/>
                        <span>{cart.length}</span>
                        <p>Моя корзина</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Content;