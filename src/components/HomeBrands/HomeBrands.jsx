import cls from "./HomeBrands.module.css"
import apple from "../../assets/apple.png"
import huawei from "../../assets/huawei.png"
import xiaomi from "../../assets/xiaomi.png"
import samsung from "../../assets/samsung.png"

const Brand = () => {
    return (
        <div className="container">
            <h2 className={cls.heading}>Выберите бренд</h2>
            <div className={cls.flex}>
                <div className={cls.card}>
                    <div className={cls.back}>
                        <img src={apple} alt="" />
                    </div>
                    <h4 className={cls.text}>Apple</h4>
                </div>
                <div className={cls.card}>
                    <div className={cls.back}>
                        <img src={huawei} alt="" />
                    </div>
                    <h4 className={cls.text}>Huawei</h4>
                </div>
                <div className={cls.card}>
                    <div className={cls.back}>
                        <img src={xiaomi} alt="" />
                    </div>
                    <h4 style={{color:"green"}} className={cls.text}>Xiaomi</h4>
                </div>
                <div className={cls.card}>
                    <div className={cls.back}>
                        <img className={cls.img} src={samsung} alt="" />
                    </div>
                    <h4 className={cls.text}>Samsung</h4>
                </div>
            </div>
        </div>
    )
}

export default Brand