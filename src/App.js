import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Acc_Create from './Pages/Acc_Create';
import Forgot_Pass from './Pages/Forgot_Pass';
import ContactPage from './Pages/ContactPage';
import PageNotFound from './Pages/PageNotFound';
import About from './Pages/About';
import Item from './Pages/Products_item/Item';
import Clothing from './Pages/Clothing';

const App = () => {

  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Acc_Create/>}/>
      <Route path='/forgotpassword' element={<Forgot_Pass/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/products' element={<Item/>}/>
      <Route path='/items' element={<Item/>}/>
      <Route path='/clothing' element={<Clothing/>}/>
      </Routes>
      </Router>
  );
};
export default App;