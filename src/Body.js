import React, { Component } from 'react';

import './Body.css';

import print from './assets/print-icon.png';
import pizza from './assets/choco-pizza.png';
import divider from './assets/Capture.PNG';
import vanessa from './assets/van-pic.png';

class Body extends Component {
   
    render() { 
        return ( 
            <div>
                   <h1>Chocolate Pizza</h1>
            <h2>POSTED ON 15 DEC 2013 / DESSERTS</h2>
            
            <section className="print-section">
            <h2 className="print-txt">PRINT</h2>
            <img className="print-img"src={print} alt="print"/>
            </section>
            
            <section className="pizza-img">
            <img className="pizza" src={pizza} alt="pizza"/>
            </section>
            <section className="main-section">
<section className="p-section">
<p>For the fig-swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. halve all of the figd and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.</p>
<p>For the fig-swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. halve all of the figd and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.</p>
<p>For the fig-swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. halve all of the figd and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.</p>
</section>

<section className="ingredients">
<span className="ingredients-list">1 1/2 cups milk </span>
<span className="ingredients-list">1/2 cup mascarpone</span>
<span className="ingredients-list">1/2 tsp pink salt</span>
<span className="ingredients-list">1/2 cup brown sugar</span>
<span className="ingredients-list">1 lb black mission figs</span>
<span className="ingredients-list">2-4 Tbsp water</span>
<span className="ingredients-list2">1 1/2 cups heavy cream</span>

<span className="ingredients-list2" id="strike">1/3 cup granulated sugar</span>
<span className="ingredients-list2">1 lemon, juiced</span>
<span className="ingredients-list2" id="strike2">2 egg yolks</span>
<span className="ingredients-list2">2 Tbsp butter</span>
<span className="ingredients-list2">1 cup honey roasted pecans, roughly chopped</span>
</section>

</section>
<section className="divider2">
<img src={divider} alt='divider'/>
</section>


<section className="vanessa">
<section className="vanessa-img">
    <img src={vanessa} alt='vanessa'/>
</section>

<section className="vanessa-name">
<span className="name">Vanessa Stevenson</span>
<br></br>
<span className="bio">Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</span>
</section>


<section className="vanessa-btn">
<button className="btn">SHARE RECIPE</button>
</section>

</section>
            </div>
         );
    }
}
 
export default Body;