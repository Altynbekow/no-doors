import React from 'react';
import Layout from "./components/layout/index.jsx";
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home/Home.jsx";


// pages
import CartPage from './pages/Cart/Cart.jsx';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route  path="/" element={<Home/>}/>
                    <Route path='/company' element={<h1>Company Page</h1>}/>
                    <Route path='/delivery-and-payment' element={<h1>D and P Page</h1>}/>
                    <Route path='/guarantees' element={<h1>Guarantees Page</h1>}/>
                    <Route path='/contacts' element={<h1>Contacts Page</h1>}/>
                    <Route path='/personal-room' element={<h1>Personal Page</h1>}/>
                    <Route path='/cart' element={<CartPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;