
// Import dependencies
import React, { Component, MouseEvent, ChangeEvent } from 'react'
import { EmptyInterface, ShoppingListStateInterface } from '../interfaces'


// Create component class
class ShoppingList extends Component<EmptyInterface, ShoppingListStateInterface>
{

    constructor(props: EmptyInterface)
    {
        super(props);
        this.state = {
            newitemName: "",
            items: new Array<string>()
        };
    }

    addItem = (event: MouseEvent) =>
    {
        event.preventDefault();
        const newList: Array<string> = this.state.items.concat(this.state.newitemName);
        this.setState({ items: newList });
    }

    removeItem = (event: MouseEvent, removeName: string) =>
    {
        event.preventDefault();
        const newList: Array<string> = this.state.items.filter((name) => (name !== removeName))
        this.setState({ items: newList });
    }

    editItem = (event: MouseEvent, editName: string) =>
    {
        event.preventDefault();
        var editList: Array<string> = this.state.items;
        for (var i = 0; i < editList.length; i++)
            if(editList[i] == editName)
                editList[i] = this.state.newitemName;
                
        this.setState({ items: editList });
    }

    handleTextChange = (event: ChangeEvent<HTMLInputElement>) =>
    {
        this.setState({ newitemName: event.target.value});
    }

    render = () =>
    {
        return (
            <div>
                <input
                  placeholder="Enter topic here..." 
                  value={ this.state.newitemName }
                  onChange={ this.handleTextChange }
                />
                <button 
                    className="btn btn-primary btn-sm"
                    onClick={this.addItem}> 
                    +
                </button>
                {
                    this.state.items.map((item) => (
                        <div>
                            <p> {item} </p>
                            <button 
                                className="btn btn-danger btn-sm"
                                onClick={(e) => this.removeItem(e, item)}> 
                                - 
                            </button>
                            <button 
                                className="btn btn-info btn-sm"
                                onClick={(e) => this.editItem(e, item)}> 
                                %
                            </button>
                        </div>
                    ))
                }
            </div>
        );
    }

}

export default ShoppingList;
