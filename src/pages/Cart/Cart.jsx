import cls from './Cart.module.css'
import {Typography} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const data = [
    {
        name: "iPhone 7 Plus Шлейф кнопки включения + Шлейф громкости Оригинал",
        price: "1059 ₽",
        price2: "750 ₽",
        stock: "500 шт.",
        total: "9 750 ₽"
    }
]


const Cart = () => {
    return (
        <div className='container'>
            <div className={cls.cart__wrap}>
                <Typography fontSize={'40px'} fontWeght={'600'} mb={'60px'} variant='h3'>Ваша корзина</Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left" sx={{pl: '100px'}} >
                                    Название товара
                                </TableCell>
                                <TableCell align="right">Цена (Розница)</TableCell>
                                <TableCell align="right">Цена (Опт от 5)</TableCell>
                                <TableCell align="right">Остаток</TableCell>
                                <TableCell align="right">Количество</TableCell>
                                <TableCell align="right">Сумма</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell >{row.name}</TableCell>
                                    <TableCell align="right">{row.price}</TableCell>
                                    <TableCell align="right">{row.price2}</TableCell>
                                    <TableCell align="right">{row.stock}</TableCell>
                                    <TableCell align="right" >
                                        <button>-</button>
                                        <input type="text" style={{width:40}} />
                                        <button>+</button>
                                    </TableCell>
                                    <TableCell align="right">{row.total}</TableCell>
                                    <TableCell align="right"> X </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default Cart;