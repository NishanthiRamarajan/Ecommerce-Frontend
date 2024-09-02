import React from 'react'
import ps from './Products.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Link} from 'react-router-dom';

const Products = () => {
    const responsive = {
        superLargeDesktop: {
         
          breakpoint: { max: 4000, min: 1024 },
          items: 5,
          slidesToSlide: 3
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
};

  return (
    <div className={ps['App']}>
    <h1 style={{textAlign:'left', fontWeight:'700', fontSize:'20px'}}>Today's Deals</h1>
    <div className={ps['carousel-wrapper']} style={{backgroundColor:"white"}}>

    <Carousel responsive={responsive}>
        <div className={ps['card']}>
            <p className={ps['topper_1']}>Hot</p>
            <Link to='/clothing'><img className={ps['product--image']}
            src='./images/offer1.png' alt=""/></Link>
            <div className={ps['deals']}>
                <p className={ps['al-first']}>Up to 25% off</p>
                <p className={ps['al-sec']}>Limited time deal</p>
            </div>
            <p className={ps['para-align']}>Best offers from Top Brand...</p>
            
        </div>
        <div className={ps['card']}>
            <Link to='/clothing'><img className={ps['product--image']}
            src='./images/offer2.png' alt=""/></Link>
            <div className={ps['deals']}>
                <p className={ps['al-first']}>Up to 59% off</p>
                <p className={ps['al-sec']}>Limited time deal</p>
            </div>
            <p className={ps['para-align']}>Travel Adapters And Electronic Accessories from RTS</p>
            
            </div>
            <div className={ps['card']}>
            <p className={ps['topper_2']}>New</p>
            <Link to='/clothing'><img className={ps['product--image']}
            src='./images/offer3.png' alt=""/></Link>
            <div className={ps['deals']}>
                <p className={ps['al-first']}>Up to 13% off</p>
                <p className={ps['al-sec']}>Limited time deal</p>
            </div>
            <p className={ps['para-align']}>Branded Suitcase, Backpacks and Duffles</p>
            
            </div>
            <div className={ps['card']}>
            <p className={ps['topper_3']}>Best</p>
            <Link to='/clothing'><img className={ps['product--image']}
            src='./images/offer4.png' alt=""/></Link>
            <div className={ps['deals']}>
                <p className={ps['al-first']}>Up to 23% off</p>
                <p className={ps['al-sec']}>Limited time deal</p>
            </div>
            <p className={ps['para-align']}>Best Offers on Home and Storage Products</p>
            
            </div>
            <div className={ps['card']}>
            <Link to='/clothing'><img className={ps['product--image']}
            src='./images/offer5.png' alt=""/></Link>
            <div className={ps['deals']}>
            <p className={ps['al-first']}>Up to 47% off</p>
            <p className={ps['al-sec']}>Limited time deal</p>
            </div>
            <p className={ps['para-align']}>Best Deals on Asian...</p>
            
            
            </div>
            <div className={ps['card']}>
            <Link to='/clothing'><img className={ps['product--image']}
            src='./images/offer6.png' alt=""/></Link>
            <div className={ps['deals']}>
                <p className={ps['al-first']}>Up to 32% off</p>
                <p className={ps['al-sec']}>Limited time deal</p>
            </div>
            <p className={ps['para-align']}>Water Softeners & Accessories from WaterScience</p>
            </div>


            <div className={ps['card']}>
            <p className={ps['topper_2']}>New</p>
            <Link to='/clothing'><img className={ps['product--image']}
            src='./images/offer7.png' alt=""/></Link>
            <div className={ps['deals']}>
            <p className={ps['al-first']}>Up to 13% off</p>
            <p className={ps['al-sec']}>Limited time deal</p>
            </div>
            <p className={ps['para-align']}>Best offers on Travel Accessories</p>
            </div>
            
            
            <div className={ps['card']}>
            <Link to='/clothing'><img className={ps['product--image']}
            src='./images/offer8.png' alt=""/></Link>
            <div className={ps['deals']}>
            <p className={ps['al-first']}>Up to 32% off</p>
            <p className={ps['al-sec']}>Limited time deal</p>
            </div>
            <p className={ps['para-align']}>New Galaxy Z Fold 5</p>
            </div>
            <div className={ps['card']}>
            <p className={ps['topper_2']}>New</p>
            <Link to='/clothing'><img className={ps['product--image']}
            src='./images/offer9.png' alt=""/></Link>
            <div className={ps['deals']}>
            <p className={ps['al-first']}>Up to 24% off</p>
            <p className={ps['al-sec']}>Limited time deal</p>
            </div>
            <p className={ps['para-align']}>Combo Offers on Umbrellas</p>  
            </div>
            <div className={ps['card']}>
            <p className={ps['topper_3']}>Best</p>
            <Link to='/clothing'><img className={ps['product--image']}
            src='./images/offer10.png' alt=""/></Link>
            <div className={ps['deals']}>
            <p className={ps['al-first']}>Up to 19% off</p>
            <p className={ps['al-sec']}>Limited time deal</p>
            </div>
            <p className={ps['para-align']}>Best Offers on Electronics</p>  
            
        </div> 
    </Carousel>
    </div>

    <h1 style={{textAlign:'left', fontWeight:'700', fontSize:'20px'}}>Bags</h1>
    <div className={ps['carousel-wrapper']} style={{backgroundColor:"white"}}>
    <Carousel responsive={responsive} >
        <div className={ps['card']}>
        <Link to='/clothing'><img className={ps['product--image']}
            src='./images/bag1.png' alt=""/></Link>
            <h2 className={ps['h2']}>FATMUG Messenger Crossbody Unisex Shoulder Sling Bag for College.</h2>
            <p className={ps['price']}>₹399</p>
        </div>
        <div className={ps['card']}>
        <Link to='/clothing'><img className={ps['product--image']}
            src='./images/bag2.png' alt=""/></Link>
            <h2 className={ps['h2']}>Lavie Women's Beech Satchel Bag | Ladies Purse Handbag</h2>
            <p className={ps['price']}>₹399</p>
        </div>
        <div className={ps['card']}>
            <Link to='/clothing'><img className={ps['product--image']}
            src='./images/bag.jpg' alt=""/></Link>
            <h2 className={ps['h2']}>Protecta Unisex Professional Bag Briefcase for Laptops </h2>
            <p className={ps['price']}>₹399</p>
        </div>
        <div className={ps['card']}>
            <Link to='/clothing'><img className={ps['product--image']}
            src='./images/bag4.png' alt=""/></Link>
            <h2 className={ps['h2']}>SYGA Children Girls Messenger Bag Coin Purse Small Bunny Rabbit Cat Cartoon Shoulder Bag</h2>
            <p className={ps['price']}>₹399</p>
        </div>
        <div className={ps['card']}>
        <Link to='/clothing'><img className={ps['product--image']}
            src='./images/bag5.png' alt=""/></Link>
            <h2 className={ps['h2']}>Eco Right Crossbody Box Sling Bags for Women & Men, Side Purse for Women Stylish Latest</h2>
            <p className={ps['price']}>₹399</p>
            
        </div>
        <div className={ps['card']}>
        <Link to='/clothing'><img className={ps['product--image']}
            src='./images/bag6.png' alt=""/></Link>
            <h2 className={ps['h2']}>Sling Cross Body Travel Office Business Messenger One Side Shoulder Bag for Men & Women</h2>
            <p className={ps['price']}>₹399</p>
            
        </div>
        <div className={ps['card']}>
        <Link to='/clothing'><img className={ps['product--image']}
            src='./images/bag7.png' alt=""/></Link>
            <h2 className={ps['h2']}>EXOTIC starelipse Bridal clutch</h2>
            <p className={ps['price']}>₹399</p>
        </div>
        <div className={ps['card']}>
        <Link to='/clothing'><img className={ps['product--image']}
            src='./images/bag8.png' alt=""/></Link>
            <h2 className={ps['h2']}>NFI essential Sling Bag for Business College & Classes,One Side Shoulder With Adjustable Strap</h2>
            <p className={ps['price']}>₹399</p>
            
        </div>
        <div className={ps['card']}>
            <Link to='/clothing'><img className={ps['product--image']}
            src='./images/bag9.png' alt=""/></Link>
            <h2 className={ps['h2']}>Frantic Cartoon Plush School Backpack Bag for 2 to 5 Years Baby Preschool, Picnic, Nursery</h2>
            <p className={ps['price']}>₹399</p>
        </div>
        <div className={ps['card']}>
        <Link to='/clothing'><img className={ps['product--image']}
            src='./images/bag10.png' alt=""/></Link>
            <h2 className={ps['h2']}>ROLANDO Sophie Women's Cross-body Leather Sling Bag</h2>
            <p className={ps['price']}>₹399</p>
        </div>  
    </Carousel>
    </div>

    
    <h1 style={{textAlign:'left', fontWeight:'700', fontSize:'20px'}}>Mens Fashion</h1>
    <div className={ps['carousel-wrapper']} style={{backgroundColor:"white"}}>
    <Carousel responsive={responsive}>
        <div className={ps['card']}>
            <Link to='/clothing'><img className={ps['product--image']}
            src='./images/men_1.png' alt=""/></Link>
            <h2 className={ps['h2']}>FATMUG Messenger Crossbody Unisex Shoulder Sling Bag for College.</h2>
            <p className={ps['price']}>₹399</p>
        </div>
        <div className={ps['card']}>
            <Link to='/clothing'><img className={ps['product--image']}
            src='./images/men_2.jpg' alt=""/></Link>
            <h2 className={ps['h2']}>Lavie Women's Beech Satchel Bag | Ladies Purse Handbag</h2>
            <p className={ps['price']}>₹399</p>
        </div>
        <div className={ps['card']}>
            <Link to='/clothing'><img className={ps['product--image']}
            src='./images/men_3.png' alt=""/></Link>
            <h2 className={ps['h2']}>Protecta Unisex Professional Bag Briefcase for Laptops </h2>
            <p className={ps['price']}>₹399</p>
        </div>
        <div className={ps['card']}>
            <Link to='/clothing'><img className={ps['product--image']}
            src='./images/men_4.png' alt=""/></Link>
            <h2 className={ps['h2']}>SYGA Children Girls Messenger Bag Coin Purse Small Bunny Rabbit Cat Cartoon Shoulder Bag</h2>
            <p className={ps['price']}>₹399</p>
        </div>
        <div className={ps['card']}>
            <Link to='/clothing'><img className={ps['product--image']}
            src='./images/men_5.png' alt=""/></Link>
            <h2 className={ps['h2']}>Eco Right Crossbody Box Sling Bags for Women & Men, Side Purse for Women Stylish Latest</h2>
            <p className={ps['price']}>₹399</p>
            
        </div>
        <div className={ps['card']}>
            <Link to='/clothing'><img className={ps['product--image']}
            src='./images/men_6.png' alt=""/></Link>
            <h2 className={ps['h2']}>Sling Cross Body Travel Office Business Messenger One Side Shoulder Bag for Men & Women</h2>
            <p className={ps['price']}>₹399</p>
            
        </div>
        <div className={ps['card']}>
            <Link to='/clothing'><img className={ps['product--image']}
            src='./images/men_7.png' alt=""/></Link>
            <h2 className={ps['h2']}>EXOTIC starelipse Bridal clutch</h2>
            <p className={ps['price']}>₹399</p>
        </div>
        <div className={ps['card']}>
            <Link to='/clothing'><img className={ps['product--image']}
            src='./images/men_8.png' alt=""/></Link>
            <h2 className={ps['h2']}>NFI essential Sling Bag for Business College & Classes,One Side Shoulder With Adjustable Strap</h2>
            <p className={ps['price']}>₹399</p>
            
        </div>
        <div className={ps['card']}>
            <Link to='/clothing'><img className={ps['product--image']}
            src='./images/men_9.png' alt=""/></Link>
            <h2 className={ps['h2']}>Frantic Cartoon Plush School Backpack Bag for 2 to 5 Years Baby Preschool, Picnic, Nursery</h2>
            <p className={ps['price']}>₹399</p>
        </div>
        <div className={ps['card']}>
            <Link to='/clothing'><img className={ps['product--image']}
            src='./images/small_purse.jpg' alt=""/></Link>
            <h2 className={ps['h2']}>ROLANDO Sophie Women's Cross-body Leather Sling Bag</h2>
            <p className={ps['price']}>₹399</p>
        </div>  
    </Carousel>
    </div>


    <h1 style={{textAlign:'left', fontWeight:'700', fontSize:'20px'}}>Womens Fashion</h1>
    <div className={ps['carousel-wrapper']} style={{backgroundColor:"white"}}>
    <Carousel responsive={responsive}>
        <div className={ps['card']}>
            <Link to='/clothing'><img className={ps['product--image']}
            src='./images/women1.png' alt=""/></Link>
            <h2 className={ps['h2']}>FATMUG Messenger Crossbody Unisex Shoulder Sling Bag for College.</h2>
            <p className={ps['price']}>₹399</p>
        </div>
        <div className={ps['card']}>
            <Link to='/clothing'><img className={ps['product--image']}
            src='./images/women2.png' alt=""/></Link>
            <h2 className={ps['h2']}>Lavie Women's Beech Satchel Bag | Ladies Purse Handbag</h2>
            <p className={ps['price']}>₹399</p>
        </div>
        <div className={ps['card']}>
            <Link to='/clothing'><img className={ps['product--image']}
            src='./images/women3.png' alt=""/></Link>
            <h2 className={ps['h2']}>Protecta Unisex Professional Bag Briefcase for Laptops </h2>
            <p className={ps['price']}>₹399</p>
        </div>
        <div className={ps['card']}>
            <Link to='/clothing'><img className={ps['product--image']}
            src='./images/women4.png' alt=""/></Link>
            <h2 className={ps['h2']}>SYGA Children Girls Messenger Bag Coin Purse Small Bunny Rabbit Cat Cartoon Shoulder Bag</h2>
            <p className={ps['price']}>₹399</p>
        </div>
        <div className={ps['card']}>
            <Link to='/clothing'><img className={ps['product--image']}
            src='./images/women5.jpg' alt=""/></Link>
            <h2 className={ps['h2']}>Eco Right Crossbody Box Sling Bags for Women & Men, Side Purse for Women Stylish Latest</h2>
            <p className={ps['price']}>₹399</p>
            
        </div>
        <div className={ps['card']}>
            <Link to='/clothing'><img className={ps['product--image']}
            src='./images/women6.png' alt=""/></Link>
            <h2 className={ps['h2']}>Sling Cross Body Travel Office Business Messenger One Side Shoulder Bag for Men & Women</h2>
            <p className={ps['price']}>₹399</p>
            
        </div>
        <div className={ps['card']}>
            <Link to='/clothing'><img className={ps['product--image']}
            src='./images/women7.png' alt=""/></Link>
            <h2 className={ps['h2']}>EXOTIC starelipse Bridal clutch</h2>
            <p className={ps['price']}>₹399</p>
        </div>
        <div className={ps['card']}>
            <Link to='/clothing'><img className={ps['product--image']}
            src='./images/women8.png' alt=""/></Link>
            <h2 className={ps['h2']}>NFI essential Sling Bag for Business College & Classes,One Side Shoulder With Adjustable Strap</h2>
            <p className={ps['price']}>₹399</p>
            
        </div>
        <div className={ps['card']}>
            <Link to='/clothing'><img className={ps['product--image']}
            src='./images/women9.jpg' alt=""/></Link>
            <h2 className={ps['h2']}>Frantic Cartoon Plush School Backpack Bag for 2 to 5 Years Baby Preschool, Picnic, Nursery</h2>
            <p className={ps['price']}>₹399</p>
        </div>
        <div className={ps['card']}>
            <Link to='/clothing'><img className={ps['product--image']}
            src='./images/women10.png' alt=""/></Link>
            <h2 className={ps['h2']}>ROLANDO Sophie Women's Cross-body Leather Sling Bag</h2>
            <p className={ps['price']}>₹399</p>
        </div>  
    </Carousel>
    </div>
    </div>
  )
}

export default Products;