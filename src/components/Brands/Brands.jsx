import React, {useState} from 'react';
import cls from './Brands.module.css'
import {MenuItem, Select} from "@mui/material";

const brandsName = [
    {
        name: 'Apple',
        models: [
            'iPhone 11',
            'iPhone XS Max',
            'iPhone XS',
            'iPhone X',
            'iPhone 8 Plus',
            'iPhone 8',
            'iPhone 7 Plus',
            'iPhone 7 ',
            'iPhone  ',
        ]
    },
    {
        name: 'Huawei',
        models: [
            'Nova 11',
            'Nova Y91',
            'P60 Art',
            'P60 Pro',
            'Enjoy 60X',
            'Mate X3',
            'nova 11i',
            'nova Y72',
            'nova 12s ',
            'Huawei',
        ]
    },
    {
        name: 'Xiaomi',
        models: [
            'iPhone 11',
            'iPhone XS Max',
            'iPhone XS',
            'iPhone X',
            'iPhone 8 Plus',
            'iPhone 8',
            'iPhone 7 Plus',
            'iPhone 7 ',
            'Xiaomi',
        ]
    },
    {
        name: 'Samsung',
        models: [
            'Samsung s24 ultra',
            'Samsung s24 ',
            'Samsung s23 ultra',
            'Samsung s23',
            'Samsung s22 ultra',
            'Samsung s22',
            'Samsung s10 +' ,
            'Samsung s10 ',
            'Samsung',
        ]
    },
]
const brandsName2 = [
    {
        name: 'Питание и кабели',
    },
    {
        name: 'Powerbank',
    },
    {
        name: 'Акции',
    },

]

const Brands = () => {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };
    return (
        <div className='container' style={{display:"flex", alignItems:"center"}}>
            {brandsName.map(brName => (
                <Select
                    sx={{mr:'60px',
                        boxShadow: "none",
                        ".MuiOutlinedInput-notchedOutline": {border: 0},
                        "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                            {
                                border: 0,
                            },
                        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                            {
                                border: 0,
                            },
                    }}

                    value={name}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{'aria-label': 'Without label'}}
                >
                    <MenuItem value={""}>
                        {brName.name}
                    </MenuItem>
                    {brName.models.map(el => (
                        <MenuItem value={""}>
                            {el}
                        </MenuItem>
                    ))}
                </Select>
            ))}

            {brandsName2.map(brName => (
                <h6 style={{display:"flex", gap:20 }}  key={brName.name}>{brName.name}</h6>

            ))}
            <h4  style={{color:
            '#399A3A', marginLeft:"auto"}}>Прайс-лист</h4>

        </div>
    )
        ;
};

export default Brands;