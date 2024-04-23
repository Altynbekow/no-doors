import { createSlice} from "@reduxjs/toolkit";

const data = [
    {
        name: "iPhone 7 Plus Шлейф кнопки включения + Шлейф громкости Оригинал",
        retail:'950 ₽',
        Wholesale: '750 ₽',
        stock: '2536 шт.',
        image: 'image1.png',
        tags: ['Новинка', 'Скидка', 'Популярное'],
        id: 1
    },
    {
        name: "iPhone 7 Plus Шлейф кнопки включения + Шлейф громкости Оригинал",
        retail:'950 ₽',
        Wholesale: '750 ₽',
        stock: '2536 шт.',
        image: 'image2.png',
        tags: [ 'Популярное'],
        id: 2
    },
    {
        name: "iPhone 7 Plus Шлейф кнопки включения + Шлейф громкости Оригинал",
        retailOld:'950 ₽ ',
        retail: '850 ₽',
        Wholesale: '750 ₽',
        stock: '2536 шт.',
        image: 'image3.png',
        tags: ['Скидка'],
        id: 3
    },
    {
        name: "iPhone 7 Plus Шлейф кнопки включения + Шлейф громкости Оригинал",
        retail:'950 ₽',
        Wholesale: '750 ₽',
        stock: '',
        image: 'image4.png',
        tags: ['Новинка'],
        id: 4
    }
]

const popularSlice = createSlice({
    name:"popular",
    initialState:{
        data
    }
});

export const popularReducer = popularSlice.reducer;