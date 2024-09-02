import React, { useState } from 'react';
import styles from './Clothing.module.css';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar';


const products = [

  {
    id: 1,
    name: 'KLEMENS',
    price:  499,
    discount: 1699,
    image: './images/m_fashion1.png',
    category: 'mens',
    rating:3
  },
  {
    id: 2,
    name:'DENIMHOLIC',
    price: 699,
    discount: 1499,
    image: './images/men_1.png',
    category: 'mens',
    rating:4
  },
  {
    id: 3,
    name: 'LYMIO',
    price: 599,
    discount: 1599,
    image: './images/m_fashion2.png',
    category: 'mens',
    rating:4
  },
  {
    id: 4,
    name: 'DHRUVI TRENDZ',
    price: 799,
    discount: 1499,
    image: './images/men_7.png',
    category: 'mens',
    rating:5
  },
  {
    id: 5,
    name:'EYEBOGLER',
    price: 499,
    discount: 1799,
    image: './images/men_9.png',
    category: 'mens',
    rating:5
  },
  {
    id: 6,
    name: 'LEOTUDE',
    price: 699,
    discount: 1499,
    image: './images/men_5.png',
    category: 'mens',
    rating:2
  },
  {
    id: 7,
    name: 'LONDON HILLS',
    price: 399,
    discount: 1499,
    image: './images/m_fashion3.png',
    category: 'mens',
    rating:1
  },
  {
    id: 8,
    name: 'ALLEN SOLLY',
    price: 599,
    discount: 1699,
    image: './images/men_3.png',
    category: 'mens',
    rating:4
  },
  {
    id: 9,
    name: 'GRECIILOOKS',
    price: 399,
    discount: 1299,
    image: './images/w_fashion1.png',
    category: 'womens'
  },
  {
    id: 10,
    name: 'NAIXA',
    price: 499,
    discount: 1399,
    image: './images/w_fashion5.png',
    category: 'womens',
    rating:3
  },
  {
    id: 11,
    name: 'LERIYA FASHION',
    price: 299,
    discount: 1199,
    image: './images/w_fashion2.png',
    category: 'womens',
    rating:4
  },
  {
    id: 12,
    name: 'FIORRA',
    price: 599,
    discount: 1999,
    image: './images/women6.png',
    category: 'womens',
    rating:5
  },
  {
    id: 13,
    name: 'LERKIZA',
    price: 699,
    discount: 1499,
    image: './images/women8.png',
    category: 'womens',
    rating:5
  },
  {
    id: 14,
    name: 'KOTTY',
    price: 699,
    discount: 1699,
    image: './images/w_fashion3.png',
    category: 'womens',
    rating:3
  },
  {
    id: 15,
    name: 'GENERIC',
    price: 399,
    discount: 1399,
    image: './images/w_fashion6.png',
    category: 'womens',
    rating:2
  },
  {
    id: 16,
    name: 'AV2',
    price: 199,
    discount: 1099,
    image: './images/w_fashion4.png',
    category: 'womens',
    rating:1
  },
  
  ];
  

const Clothing = () => {
  const [selectedCategory, setSelectedCategory] = useState('mens');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortType, setSortType] = useState('name');
  const [ratingFilter, setRatingFilter] = useState(null);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortType === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortType === 'price') {
      return a.price - b.price;
    } else if (sortType === 'rating') {
      return b.rating - a.rating;
    }
  });

  const filteredProducts = sortedProducts.filter(product => {
    return (
      (selectedCategory === 'all' || product.category === selectedCategory) &&
      (!ratingFilter || product.rating === ratingFilter) &&
      (searchQuery === '' || product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  const handleSortTypeChange = (type) => {
    setSortType(type);
  };

  const handleRatingFilterChange = (rating) => {
    setRatingFilter(rating);
  };

  return (
    <>
      <NavBar />
      <div className={styles['clothing-page']}>
        <div className={styles['align-vertical']}>
          <div className={styles['category-buttons']}>
            <button style={{width:'100px'}} onClick={() => setSelectedCategory('all')}>
              <FilterAltOutlinedIcon style={{ fontSize: '16px', marginRight: '4px' }} />All
            </button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button style={{width:'169px'}} onClick={() => setSelectedCategory('mens')}>
              <FilterAltOutlinedIcon style={{ fontSize: '16px', marginRight: '4px' }} />Men's Clothing
            </button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button style={{width:'195px'}} onClick={() => setSelectedCategory('womens')}>
              <FilterAltOutlinedIcon style={{ fontSize: '16px', marginRight: '4px' }} />Women's Clothing
            </button>
          </div>
          <div className={styles['category-buttons']} id={styles['filter']}>
            <button>
              <label style={{paddingRight:'10px'}}>Sort by </label>
              <select onChange={(e) => handleSortTypeChange(e.target.value)}>
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
              </select>
            </button>
          </div>
          <div className={styles['category-buttons']} id={styles['filter_1']}>
            <button>
              <label style={{paddingRight:'10px'}}>Filter by rating </label>
              <select onChange={(e) => handleRatingFilterChange(parseInt(e.target.value))}>
                <option value="">All</option>
                <option value="1">1 star</option>
                <option value="2">2 stars</option>
                <option value="3">3 stars</option>
                <option value="4">4 stars</option>
                <option value="5">5 stars</option>
              </select>
            </button>
          </div>
          
        </div>
        <div className={styles['product-grid']}>
          {filteredProducts.map(product => (
            <div key={product.id} className={styles['product-card']}>
              <img className={styles['product-image']} src={product.image} alt={product.name} />
              <hr style={{marginTop:'10px',}}/>
              <div className={styles["product-details"]}>
                <h3 className={styles["product-name"]} style={{textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)'}}>{product.name}</h3>
                <p className={styles["product-price"]}> ₹{product.price} <span>&nbsp;&nbsp;<del>M.R.P.: ₹{product.discount}</del></span></p>
                <Link to='/items' className={styles["see-more-btn"]} style={{fontSize:'14px',color:'blue'}}>See More >></Link>
                </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Clothing;
