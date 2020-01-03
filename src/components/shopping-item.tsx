
// Import dependencies
import React, { Component } from 'react'
import { EmptyInterface, ShoppingItemPropsInterface } from '../interfaces'
import uuid from 'uuid/v4'

// Base Item class
class Item 
{

    public id: string;
    public name: string;
    
    constructor(name: string)
    {
        this.id = uuid();
        this.name = name;
    }

}

export { Item };

// Create component class
class ShoppingItem extends Component<ShoppingItemPropsInterface, EmptyInterface>
{

    render = () =>
    {
        return (
            <div className="itemBox">
                <span> {this.props.item.name} </span>
                <button 
                    className="btn btn-dark btn-sm"
                    onClick={(e) => this.props.clicked(e, this.props.item.id)}> 
                    %
                </button>
                <button 
                    className="btn btn-danger btn-sm"
                    onClick={(e) => this.props.removed(e, this.props.item.id)}> 
                    - 
                </button>
            </div>
        );
    }

}

export default ShoppingItem;
