import React from "react";

import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa"
import Payment from '../../assets/payments.png'
const Footer = () => {
    return  <footer className="footer">
    <div className="footer-content">
        <div className="col">
            <div className="title">About</div>
            <div className="text">
                wdcwlhcjbwdkhcbkhwcjbwkjcjbwdcljwcjbwdjkcb ldwncjbwj
                lcnwdlbcljbwdljcnlkwnclknwdlkcnlkwdnclnwd
                c;nwdjbckjbwdljclkwnclknwdlkcnlkdcejihcrcbr.
            </div>
        </div>
        <div className="col">
            <div className="title">Contact</div>
    
        <div className="c-tem">
            <FaLocationArrow/>
            <div className="text">
                Mumbai, Maharashtra -400003
                India
            </div>
        </div>
        <div className="c-tem">
            <FaMobileAlt/>
            <div className="text">
                phone: 0838 373 9853
            </div>
        </div>
        <div className="c-tem">
            <FaEnvelope/>
            <div className="text">
                Email: abdulh827@gmail.com
            </div>
        </div>
        </div>

        <div className="col">
            <div className="title">Categories</div>
            <div className="text">Headphones</div>
            <div className="text">Smart watch</div>
            <div className="text">Bluetooth speaker</div>
            <div className="text">Earbuds</div>
            <div className="text">Home theatre</div>
            <div className="text">Projectors</div>

        </div>

        <div className="col">
            <div className="title">Pages</div>
            <div className="text">Home</div>
            <div className="text">About</div>
            <div className="text">Privacy Policy</div>
            <div className="text">Returns</div>
            <div className="text">t&c</div>
            <div className="text">Contact us</div>


        </div>

    </div>
    <div className="bottom-bar">
        <div className="bottom-bar-content">
            Vehicle store 2023 CREATED BY Amaan. 
            Dignizant store.
        </div>
        <img src={Payment} />
    </div>

    </footer>
};

export default Footer;
