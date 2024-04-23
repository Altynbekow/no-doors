import cls from './Popular.module.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import {useSelector} from 'react-redux'
import {useState} from "react";
import {Box, Input, Stack} from "@mui/material";

const PopularProducts = () => {
        const data = useSelector(state => state.popular.data)
        console.log(data, 'data')

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
                    <Card sx={{maxWidth: 255}}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={`http://localhost:5173/image1.png`}
                        />
                        <CardContent>
                            <div style={{position: "relative"}}>
                                <FavoriteBorderIcon/>
                                <p style={{
                                    position: "absolute",
                                    top: '-150px',
                                    display: "flex",
                                    gap: "20px",
                                    background: "blue",
                                    color: "white"
                                }}>
                                    {el.tags}
                                </p>

                            </div>
                            <Typography gutterBottom variant="h5" component="div">
                                {el.name}

                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <p>Розница:{el.retail}</p>
                                <p>Оптом (от 5 штук): {el.Wholesale}</p>
                                <p>В наличии:{el.stock}</p>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {/*<div style={{*/}
                            {/*    marginLeft: 5,*/}
                            {/*    width: '63px',*/}
                            {/*    display: "flex",*/}
                            {/*    gap: '7px',*/}
                            {/*    border: '1px solid #F6F7FB',*/}
                            {/*    padding: '20px 7px 20px 6px',*/}
                            {/*    borderRadius: '4px'*/}
                            {/*}}>*/}
                            {/*    <p style={{cursor: "pointer"}} onClick={incrementCount}>+</p>*/}
                            {/*    <span>{count}</span>*/}
                            {/*    <p style={{cursor: "pointer"}} onClick={decrementCount}>-</p>*/}
                            {/*</div>*/}
                            <Stack>
                                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                                    <Input sx={{width: 50, textAlign: 'center'}} value={96}/>
                                    <Button size="outlined"
                                            sx={{borderColor: '#399A3A', color: '#399A3A', '&:hover':{
                                                borderColor: '#399A3A',
                                                }}}>В
                                        корзину</Button>
                                </Box>
                            </Stack>
                        </CardActions>
                    </Card>
                ))}
            </div>
        );
    }
;

export default PopularProducts;