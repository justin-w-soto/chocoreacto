import React, { Component } from 'react';
import vanessa from './assets/van-pic.png';

class Footer extends Component {

    render() { 

        return ( 

            <>
            <section className="vanessa">

<section className="vanessa-img">

    <img src={vanessa} alt="vanessa"/>

</section>

<section className="vanessa-name">

    <span className="name">Vanessa Stevenson</span>

    <span className="bio">Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</span>

</section>


<section>

<button className="btn">SHARE RECIPE</button>

</section>

</section>
            </>

         );
    }
}
 
export default Footer;