import React, { useEffect, useState } from "react";
import Search from "../search/Search";
import AddProducts from "../addProducts/AddProducts";
import CardBody from "../Card/CardBody";
import Button from "../button/Button"
import { Link } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import im from "./Item.module.css";

const Item = () => {
  const [items, setItem] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [addedItems, setAddedItem] = useState([]);
  const [showAddProducts, setShowAddProducts] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setItem(data));
    // console.count("hi");
  }, []);
  function changingSrarchData(e) {
    setSearchValue(e.target.value);
  }
  const itmesFilter = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  function addItem(item) {
    item.addNumber = 1;
    const itemArr = addedItems;
    setAddedItem([...itemArr, item]);
  }

  function removeItem(item) {
    const newItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
    setAddedItem(newItems);

  }
  return (
    <div>
    <div className={im['container']}>
        <div className={im['NavBar']}>
        <div className={im['logo']}>
            <Link to='/' ><img src='./images/Ziara.png' alt=" "/></Link>
        </div>

        <div className={im['login']}>
        <Link to='/login'><button id ={im['but_login']}><AccountCircleOutlinedIcon/></button></Link>
        </div>
    
        <div className={im['nav-ele']}>
            <Link to='/'><a>Home</a></Link>
            <Link to='/about'><a>About Us</a></Link>
            <Link to='/products'><a>Products</a></Link>
            <Link to='/contact'><a>Reach Us</a></Link>
        </div>
        </div>
        </div>
      <div className={im["body__container"]}>
        <div className={im["nav"]}>
          <div className={im["search_bar"]}>
            <Search
              products={items}
              value={searchValue}
              onChangeData={changingSrarchData}
            />
        </div>
          <div className={im["Button_cart"]}>
            <Button num={addedItems.length} click={setShowAddProducts} />
          </div>
        </div>

        <div className={im["card_body"]} style={{width:'80%',marginLeft:'140px',marginTop:'20px'}}>
          {showAddProducts && (
            <AddProducts
              click={setShowAddProducts}
              items={addedItems}
              removeItem={removeItem}
              setAddedItem={setAddedItem}
            />
          )}
          <CardBody
            products={itmesFilter}
            addItem={addItem}
            removeItem={removeItem}
            addedItems={addedItems}
          />
        </div>
      </div>
    </div>
  );
};

export default Item;