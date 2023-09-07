import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './router/Home';
import Pricing from './router/Pricing';
import Training from './router/Training';
import Contact from './router/Contact';

const App = () => {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/pricing' element={<Pricing></Pricing>}></Route>
          <Route path='/training' element={<Training></Training>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes>
    </>
  );
};

export default App;
