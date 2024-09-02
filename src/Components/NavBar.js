// import React from 'react'
// import hs from './NavBar.module.css'
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import {Link} from 'react-router-dom';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// const NavBar = () => {
//   return (
//     <div className={hs['container']}>
//     <div className={hs['NavBar']}>
//     <div className={hs['logo']}>
//         <img src='./images/Ziara.png' alt=" "/>
//     </div>
//     <div className={hs['search-bar']}>
//         <input type="text" placeholder="Search products..." className={hs['input_home']}/>
//          <button className={hs['button_home']}><SearchOutlinedIcon/></button>
//   </div>

//     <div className={hs['login']}>
//     <Link to='/login'><button id ={hs['but_login']}><AccountCircleOutlinedIcon/></button></Link>
//     </div>

//     <div className={hs['login']}>
//     <Link to='/items'><button id ={hs['but_login']}><ShoppingCartIcon/></button></Link>
//     </div>

//     <div className={hs['nav-ele']}>
//         <Link to='/'><a>Home</a></Link>
//         <Link to='/about'><a>About Us</a></Link>
//         <Link to='/products'><a>Products</a></Link>
//         <Link to='/contact'><a>Reach Us</a></Link>
//     </div>
//     </div>
//     </div>
//   )
// }

// export default NavBar


import React from 'react';
import hs from './NavBar.module.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link, useLocation } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get('search') || '';

  const handleSearch = (event) => {
    event.preventDefault();
  const searchValue = event.target.elements.search.value;
  
  window.location.href = `https://www.amazon.in/s?k=${encodeURIComponent(searchValue)}&tag=msndeskabkin-21`;
  event.target.elements.search.value = '';
  // window.location.href = `https://www.google.co.in/search?q=${searchValue}`;

  };

  return (
    <div className={hs['container']}>
      <div className={hs['NavBar']}>
        <div className={hs['logo']}>
        <Link to='/' ><img src='./images/Ziara.png' alt=" "/></Link>
        </div>
        <form className={hs['search-bar']} onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            placeholder="Search products..."
            className={hs['input_home']}
            defaultValue={searchTerm}
          />
          <button type="submit" className={hs['button_home']}><SearchOutlinedIcon /></button>
        </form>

        <div className={hs['login']}>
          <Link to='/login'><button id={hs['but_login']}><AccountCircleOutlinedIcon /></button></Link>
        </div>

        <div className={hs['login']}>
          <Link to='/items'><button id={hs['but_login']}><ShoppingCartIcon /></button></Link>
        </div>

        <div className={hs['nav-ele']}>
          <Link to='/'><a>Home</a></Link>
          <Link to='/about'><a>About Us</a></Link>
          <Link to='/products'><a>Products</a></Link>
          <Link to='/contact'><a>Reach Us</a></Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
