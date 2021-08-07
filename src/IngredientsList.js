import React, { Component } from 'react';
import divider from './assets/Capture.PNG';
import ingredientsData from './IngredientsData.js';
import IngredientsItem from './IngredientsItem.js';





class IngredientsList extends Component {

    render() {

        return (
    
            <>
                <section className="ingredients-list">
                {ingredientsData.map( food => 
                        <IngredientsItem amount={food.amount} name={food.name} />
                    )}
                

    

                </section>

<section className="divider2">

    <img src={divider}alt='divider'/>

</section>

</>

)
}
};

export default IngredientsList;

