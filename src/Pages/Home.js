import React from 'react'
import hs from './Home.module.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { Link } from '@mui/material';
import {Link} from 'react-router-dom';
import Products from './Products';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const Home = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
  return (
    <div className={hs['Container']}>
        <NavBar/>

    <div className={hs["carousel"]}>
        <Slider {...settings}>
            <div>
            <img src="./images/carousal_1.png" alt="Image 1" />
            </div>
            <div>
            <img src="./images/carousal_2.png" alt="Image 2" />
            </div>
            <div>
            <img src="./images/carousal_3.png" alt="Image 3" />
            </div>
            <div>
            <img src="./images/carousal_4.png" alt="Image 4" />
            </div>
            <div>
            <img src="./images/carousal_5.png" alt="Image 5" />
            </div>
        </Slider>
    </div>

    <div className={hs['col-wrap']}>
        <div className={hs['Decoration']}>
            <p><strong>Revamp your home in style</strong></p>
            <img  className={hs['pic1']} src='/images/home_decor.jpg' alt=" "/>
            <Link to='/items'><a href='#' className={hs['tag_home']}>Explore all</a></Link>
        </div>
        <div className={hs['Decoration']}>
            <p><strong>Women's Indian Clothing</strong></p>
            <img  className={hs['pic1']} src='/images/w_dress.jpg' alt=" "/>
            <Link to='/items'><a href='#' className={hs['tag_home']}>See more</a></Link>
        </div>
        <div className={hs['Decoration']}>
            <p><strong>Bestsellers|Shoes, jewellery & more</strong></p>
            <img  className={hs['pic1']} src='/images/Accessories.jpg' alt=" "/>
            <Link to='/items'><a href='#' className={hs['tag_home']}>Mega Fashion Days</a></Link>
        </div>
        <div className={hs['Decoration']}>
            <p><strong>Pocket-friendly fashion</strong></p>
            <img  className={hs['pic1']} src='/images/m_dress.jpg' alt=" "/>
            <Link to='/items'><a href='#' className={hs['tag_home']}>See more</a></Link>
        </div>
    </div>

    <h1 style={{textAlign:'left', fontWeight:'700', fontSize:'20px'}}>More items to consider</h1>
    <main>
    <div className = {hs["card"]}>
                <img src="./images/pillow.png" alt=""/>
            <div className={hs["card-content"]}>
                <h2>
                    Pillows
                </h2>
                <p>
                    Utopia Bedding Pillows 2 Pack Standard Size, Hotel Quality Pillows, Brushed Fabric, Bed Pillow for Back, Stomach or Side Sleepers - 20" x 30" / 50 x 75 cm.
                </p>
            </div>
        </div>
        <div className = {hs["card"]}>
                <img src="./images/s_bag.jpg" alt=""/>
            <div className={hs["card-content"]}>
                <h2>
                    Backpack
                </h2>
                <p>
                    VSNOON Anti-Theft Laptop Backpack, 15.6-17.3 inch Business Laptop Rucksack Bag with USB Charging Port & Lock.
                </p>
            </div>
        </div>
        <div className = {hs["card"]}>
                <img src="./images/shoe.jpg" alt=""/>
            <div className={hs["card-content"]}>
                <h2>
                    Sneakers
                </h2>
                <p>
                    Experience unmatched comfort and style with our lightweight, breathable, and non-slip shoes designed for flexibility and ease with every step.
                </p>
            </div>
        </div>
        <div className = {hs["card"]}>
                <img src="./images/phone.jpg" alt=""/>
            <div className={hs["card-content"]}>
                <h2>
                    Mobile Phones
                </h2>
                <p>
                Featuring a stunning display, advanced camera system, and powerful performance, this phone offers a seamless blend of innovation and functionality.
                </p>
            </div>
        </div>
        <div className = {hs["card"]}>
                <img src="./images/bag.jpg" alt=""/>
            <div className={hs["card-content"]}>
                <h2>
                    Office Bag
                </h2>
                <p>
                    Canvas messenger bag featuring smooth zipper, flap closure, and adjustable crossbody strap for casual use by all genders.
                </p>
            </div>
        </div>
    </main>
    <br/>

    <Products/>

    <Footer/>

</div>
  )
}
export default Home;