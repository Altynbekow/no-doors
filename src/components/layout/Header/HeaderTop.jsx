import {NavLink} from "react-router-dom"
import {useState} from "react";
import cls from "./HeaderTop.module.css"
import { IoIosCall } from "react-icons/io";


const topMenu = [
    {
        name: 'О компании',
        path: "/company"
    },
    {
        name: 'Доставка и оплата',
        path: "/delivery-and-payment"
    },
    {
        name: 'Гарантии',
        path: "/guarantees"
    },
    {
        name: 'Контакты',
        path: "/contacts"
    },
]


const HeaderTop = () => {
    const [language, setLanguage] = useState('ru')

    const handleChangeLanguage = (e) => {
        setLanguage(e.target.value)
    }

    return (
        <div className={cls.headerBg}>
            <div className='container'>
                <div className={cls.flex}>
                    <div>
                        {topMenu.map(menu => {
                            return <NavLink style={{marginLeft: 50}} key={menu.name} to={menu.path}>
                                {menu.name}
                            </NavLink>
                        })}
                    </div>
                    <div className={cls.flex2}>
                        <p>  <a href="tel:+996505710135" >  <IoIosCall /> +996505710135 </a> </p>
                        <select>
                            <option value='ru'>Русский</option>
                            <option value='en'>English</option>
                            <option value='kg'>Kyrgyzstan</option>
                        </select>
                        <NavLink to="/personal-room">
                            Личный кабинет
                        </NavLink>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeaderTop;