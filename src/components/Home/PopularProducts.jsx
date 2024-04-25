import cls from './Popular.module.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {addToCart} from "../../Redux/slices/cartSlice.js";
import {addToLike} from "../../Redux/slices/likeSlices.js";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function settagColor(text) {
    switch (text) {
        case 'Новинка':
            return "blue";
        case 'Скидка':
            return "green ";
        case 'Популярное':
            return "red";
    }
}

const tagsColor = {
    'Новинка': 'blue',
    'Скидка': 'green ',
    'Популярное': 'red'
}

import {useSelector, useDispatch} from 'react-redux'
import {useState} from "react";
import {Box, Checkbox, Input} from "@mui/material";

const PopularProducts = () => {
        const data = useSelector(state => state.popular.data)
        const dispatch = useDispatch()

        const addItem = (product) => {
            dispatch(addToCart(product))
        }
        const addLike = (product) => {
            dispatch(addToLike(product))
        }
        const label = {inputProps: {'aria-label': 'Checkbox demo'}};


        const [count, setCount] = useState(96);

        const incrementCount = () => {
            setCount(count + 1);
        };

        const decrementCount = () => {
            if (count > 0) {
                setCount(count - 1);
            }
        };
        return (
            <div style={{display: "flex", gap: "30px",}}>
                {data.map(el => (
                    <Card sx={{maxWidth: 255, position: 'relative'}}>
                        <div style={{
                            width: '50%',
                            position: "absolute",
                            top: 11,
                            left: 11,
                            display: "flex",
                            gap: '5px',
                            flexWrap: 'wrap',
                        }}>
                            {el.tags.map(item => {
                                return <p style={{
                                    background: `${settagColor(item)}`,
                                    padding: '4px 10px',
                                    fontSize: '12px',
                                    color: 'white',
                                    borderRadius: '5px',
                                }}>{item}</p>
                            })}
                        </div>
                        <Checkbox style={{marginLeft: 200, color: "black" }}{...label}
                            onChange={() => addLike(el)}
                                  icon={< FavoriteBorder/>} checkedIcon={<Favorite/>}/>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={`http://localhost:5173/image1.png`}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {el.name}

                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{justifyContent: 'space-between'}}>
                                <p>Розница:{el.retail}</p>
                                <p>Оптом (от 5 штук): {el.Wholesale}</p>
                                <p>В наличии:{el.stock}</p>
                            </Typography>
                            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                                <Input sx={{
                                    width: 50, textAlign: 'center',
                                    'input': {
                                        textAlign: 'center'
                                    }
                                }} value={96}/>
                                <Button size="outlined"
                                        onClick={() => {
                                            addItem(el)
                                        }}
                                        sx={{
                                            borderColor: '#399A3A', color: '#399A3A', '&:hover': {
                                                borderColor: '#399A3A',
                                            }
                                        }}>В
                                    корзину</Button>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </div>
        );
    }
;

export default PopularProducts;