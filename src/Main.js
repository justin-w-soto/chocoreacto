import React, { Component } from 'react';
import './Main.css';
import print from './assets/print-icon.png';
import pizza from './assets/choco-pizza.png';
class Main extends Component {
   
    render() { 
        return ( 
            
            <>
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
            </section>



            </>
         ); 
    }
}

    
export default Main;