import React, { Component } from 'react';

import './Main.css';

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

    <p> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
        deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
        similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
    </p>

    <p> Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis
        est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis 
        voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut 
        rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. 
    </p>

    <p> Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur
        aut perferendis doloribus asperiores repellat.
    </p>
    
</section>

<section className="ingredients">
<span>1 1/2 cups milk </span>
<span>1/2 cup mascarpone</span>
<span>1/2 tsp pink salt</span>
<span>1/2 cup brown sugar</span>
<span>1 lb black mission figs</span>
<span>2-4 Tbsp water</span>
<span>1 1/2 cups heavy cream</span>
<span id="strike">1/3 cup granulated sugar</span>
<span>1 lemon, juiced</span>
<span id="strike2">2 egg yolks</span>
<span>2 Tbsp butter</span>
<span>1 cup honey roasted pecans, roughly chopped</span>

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