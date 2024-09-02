import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
import hs from './Footer.module.css'

const Footer = () => {
  return (
    <div>
        
    <footer className={hs["footer"]}>
    <div class={hs["footer-col"]}>
        <h4>Get to Know Us</h4>
        <ul>
            <li>
                <a href="#">Careers</a>
            </li>
            <li>
                <a href="#">About Us</a>
            </li>
            <li>
                <a href="#">UK Modern Slavery Statement</a>
            </li>
            <li>
                <a href="#">Ziara Science</a>
            </li>
        </ul>
    </div>
    <div class={hs["footer-col"]}>
        <h4>Make Money with Us</h4>
        <ul>
            <li>
                <a href="#">Sell on Ziara</a>
            </li>
            <li>
                <a href="#">Sell on Ziara Business</a>
            </li>
            <li>
                <a href="#">Sell on Ziara Handmade</a>
            </li>
            <li>
                <a href="#">Sell on Ziara Launchpad</a>
            </li>
            <li>
                <a href="#">Associates Programme</a>
            </li>
            <li>
                <a href="#">Fulfilment by Ziara</a>
            </li>
            <li>
                <a href="#">Seller Fulfilled Prime</a>
            </li>
            <li>
                <a href="#">Advertise Your Products</a>
            </li>
            <li>
                <a href="#">Independently Publish with Us
                Ziara Pay</a>
            </li>
            <li>
                <a href="#">Host an Ziara Hub</a>
            </li>
                
        </ul>
    </div>
    <div class={hs["footer-col"]}>
        <h4>Ziara Payment Methods</h4>
        <ul>
            <li>
                <a href="#">Ziara Platinum Mastercard</a>
            </li>
            <li>
                <a href="#">Ziara Classic Mastercard</a>
            </li>
            <li>
                <a href="#">Ziara Money Store</a>
            </li>
            <li>
                <a href="#">Gift Cards</a>
            </li>
            <li>
                <a href="#">Payment Methods Help</a>
            </li>
            <li>
                <a href="#">Ziara Currency Converter</a>
            </li>
            <li>
                <a href="#">Shop with Points</a>
            </li>
        </ul>
    </div>
    <div class={hs["footer-col"]}>
        <h4>Let Us Help You</h4>
        <ul>
            <li>
                <a href="#">COVID-19 and Ziara</a>
            </li>
            <li>
                <a href="#">Track Packages or View Orders</a>
            </li>
            <li>
                <a href="#">Delivery Rates & Policies</a>
            </li>
            <li>
                <a href="#">Returns & Replacements</a>
            </li>
            <li>
                <a href="#">Recycling</a>
            </li>
            <li>
                <a href="#">Manage Your Content and Devices</a>
            </li>
            <li>
                <a href="#">Customer Service</a>
            </li>
            <li>
                <a href="#">Accessibility</a>
            </li>
        </ul>
    </div>
    <div className={hs['copyrights']}>
        <p><CopyrightIcon/>2024 Ziara | All Rights Reserved</p>
    </div>
</footer>
    </div>
  )
}

export default Footer