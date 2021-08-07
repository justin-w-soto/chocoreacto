import React, { Component } from 'react';

class  IngredientsItem extends Component {
    render() {

        return (
            <>
            <label className="Checkyboys">
                <input type="checkbox"></input>
                    <div className="thingsThatGoInPizza">{this.props.amount} {this.props.name}</div>
            </label>
            </>
          );
    }
}
 
export default IngredientsItem;

