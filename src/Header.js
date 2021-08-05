import React, { Component } from 'react';

import './Header.css';

import logo from './assets/logo.png';
import faceBook from './assets/fb-icon.png';
import twitter from './assets/twit-icon.png';
import googlePlus from './assets/gp-icon.png';
import instagram from './assets/insta-icon.png';
import flickr from './assets/flic-icon.png';
import pintrest from './assets/pint-icon.png';
import rss from './assets/rss-icon.png';
import mail from './assets/mail-icon.png';
import divider from './assets/Capture.PNG';


class Header extends Component {
  
    render() { 
        return ( <div>
            <header className="header">
            <section className="title">
            <img className='logo' src={logo} alt='logo'/>
            <span className="delicious">Delicious</span>
            <br></br>
            <span className="blog">THE BEST FOOD BLOG ON THE WEB</span>
            
            <section className="iconz">
             <section className="icons-section">
            <img src={faceBook} alt="facebook"/>
                        <img src={twitter} alt="twitter"/>
                        <img src={googlePlus}alt="google plus"/>
                        <img src={instagram} alt="instagram"/>
                        <img src={flickr} alt="flickr"/>
                        <img src={pintrest} alt="pintrest"/>
                        </section>
            
                        <section className="icons-section2">
                        <img src={rss} alt="rss"/>
                        <img src={mail} alt="mail"/>
                        </section>
                    </section>
            </section>
              <section className="divider">
                <img src={divider} alt="divider"/>
              </section>
            </header>
            </div> 
        );
    }
}
 
export default Header;