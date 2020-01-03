
// Import dependencies
import React, { Component } from 'react'
import { EmptyInterface, ShoppingItemPropsInterface } from '../interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

import uuid from 'uuid/v4'

// Base Item class
class Item 
{

    private id: string;
    private name: string;
    
    constructor(name: string)
    {
        this.id = uuid();
        this.name = name;
    }

    getId()
    {
        return this.id;
    }

    setId(uuid: string)
    {
        this.id = uuid;
    }

    getName()
    {
        return this.name;
    }

    setName(name: string)
    {
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
                {/* {
                    this.props.edit && 
                    <input> {this.props.item.getName()} </input>
                }
                {
                    !this.props.edit && 
                    <span> {this.props.item.getName()} </span>
                }  */}
                <span> {this.props.item.getName()} </span>
                <button 
                    className="btn btn-dark btn-sm fluff"
                    onClick={(e) => this.props.clicked(e, this.props.item.getId())}> 
                    <FontAwesomeIcon icon={faPencilAlt} />
                </button>
                <button 
                    className="btn btn-danger btn-sm fluff"
                    onClick={(e) => this.props.removed(e, this.props.item.getId())}> 
                    <FontAwesomeIcon icon={faMinus} />
                </button>
            </div>
        );
    }

}

export default ShoppingItem;
