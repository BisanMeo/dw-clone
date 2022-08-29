import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './Css/grid.css';
import './Css/Web/css/all.css';
import Cart from './Page/cart';
import Clock from './Page/clock';
import Glass from './Page/glass';
import Jewels from './Page/jewels';
import Home from './Page/home';
import Detail from './Page/detail';
import Search from './Page/search';


function App() {
  return (
    <div className="App">
        
        <BrowserRouter>
            <Routes>
              <Route path='/'  element={<Home/>}/>
              <Route path='/cart' element={<Cart/>} exact/>
              <Route path='/clock' element={<Clock/>} exact/>
              <Route path='/clock/:type' element={<Clock/>}/>
              <Route path='/glass' element={<Glass/>} exact/>
              <Route path='/jewels/:type' element={<Jewels/>} exact/>
              <Route path='/jewels' element={<Jewels/>} exact/>
              <Route path='/detail/:code' element={<Detail/>} exact/>
              <Route path='/search' element={<Search/>} exact/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
