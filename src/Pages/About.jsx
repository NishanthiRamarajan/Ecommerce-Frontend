import React, { useState } from 'react';
import styles from './About.module.css';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const About = () => {
  const [showFounder, setShowFounder] = useState(false);

  const toggleFounderInfo = () => {
    setShowFounder(!showFounder);
  };

  return (
    <div>
      <NavBar/>
      <div className={styles['about-container']}>
        <h1 className={styles['about-heading']}>About Ziara</h1>

        <div className={styles['align']}>
          <p className={styles['align-p']}><em><span style={{fontWeight:'500'}}>Welcome to Ziara,</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;where shopping transcends the ordinary and becomes an exhilarating journey of discovery. Embrace innovation and style as you navigate through our digital aisles, where every click brings you closer to the extraordinary. Dive into a world where convenience meets elegance, where affordability dances with luxury. Join us at Ziara, where every purchase is not just a transaction, but a testament to your unique taste and our commitment to delivering excellence. Step into a realm where shopping is not just a task, but an adventure waiting to unfold. Let Ziara be your gateway to a shopping experience like no other, where the ordinary fades and the extraordinary begins.
          Discover the thrill of finding precisely what you desire amidst our curated selection of top-tier products. Elevate your shopping experience today and witness the magic that awaits you at Ziara.</em></p>
          <img className={styles['align-img']} src='https://i1.wp.com/billionaire365.com/wp-content/uploads/2019/02/Ecommerce-Website.jpg?fit=2048%2C1452&ssl=1'/> 
        </div>

        <div>
          {showFounder && (
            <div className={styles['signature-container']}>
              <div className={styles['signature']}>
                <img className={styles['align-sign']} src='./images/signature-removebg-preview.png'/>
                <img className={styles['align-sign1']} src='./images/signature__1_-removebg-preview.png'/>
                <img className={styles['align-sign2']} src='./images/signature2-removebg-preview.png'/>
              </div>
              <div className={styles['headers']}>
                <p className={styles['head-sign']}>FOUNDERS OF ZIARA</p>
              </div>
            </div>
          )}
          <div className={styles['want-to-know-more']} onClick={toggleFounderInfo}>
            <p>know more<KeyboardArrowDownIcon/></p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
