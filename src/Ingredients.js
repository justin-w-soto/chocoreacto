import React, { Component } from 'react';
import divider from './assets/Capture.PNG';



class IngredientsData extends Component {

    render() {

        return (
    
            <>
                <section className="ingredients-list">

                <label>
                    <input type="checkbox" />
                        <li className="ingredients"> {this.props.amount} {this.props.name} </li>
                </label>

    

                </section>

<section className="divider2">

    <img src={divider}alt='divider'/>

</section>

</>

)
}
};

export default IngredientsData;

