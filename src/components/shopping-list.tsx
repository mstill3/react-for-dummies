
// Import dependencies
import React, { Component, MouseEvent, ChangeEvent, KeyboardEvent} from 'react'
import { EmptyInterface, ShoppingListStateInterface } from '../interfaces'
import ShoppingItem, { Item } from './shopping-item';

// Create component class
class ShoppingList extends Component<EmptyInterface, ShoppingListStateInterface>
{

    constructor(props: EmptyInterface)
    {
        super(props);
        this.state = {
            newitem: new Item(""),
            items: new Array<Item>()
        };
    }

    add = () =>
    {
        const newList: Array<Item> = this.state.items.concat( new Item(this.state.newitem.getName()) );
        this.setState({ items: newList });
    }

    addItem = (event: MouseEvent) =>
    {
        event.preventDefault();
        this.add();
    }

    removeItem = (event: MouseEvent, uuid: string) =>
    {
        event.preventDefault();
        const newList: Array<Item> = this.state.items.filter((item) => item.getId() != uuid);
        this.setState({ items: newList });
    }

    editItem = (event: MouseEvent, uuid: string) =>
    {
        event.preventDefault();
        var editList: Array<Item> = this.state.items;
        for (var i = 0; i < editList.length; i++)
            if(editList[i].getId() == uuid)
                editList[i].setName(this.state.newitem.getName());

        this.setState({ items: editList });
    }

    handleTextChange = (event: ChangeEvent<HTMLInputElement>) =>
    {
        this.setState({ newitem: new Item(event.target.value)});
    }

    handleEnterPress = (event: KeyboardEvent<HTMLInputElement>) =>
    {
        if(event.key === 'Enter')
            this.add();
    }

    render = () =>
    {
        return (
            <div>
                <input
                  placeholder="Enter topic here..." 
                  value={ this.state.newitem.getName() }
                  onChange={ this.handleTextChange }
                  onKeyDown={ this.handleEnterPress }
                />
                <button 
                    className="btn btn-primary btn-sm"
                    onClick={this.addItem}> 
                    +
                </button>

                {
                    this.state.items.map((item: Item) => (
                        <ShoppingItem 
                            item={item}
                            clicked={this.editItem}
                            removed={this.removeItem}/>
                    ))
                }
            </div>
        );
    }

}

export default ShoppingList;
