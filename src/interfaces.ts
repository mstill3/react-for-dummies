import { AnyTxtRecord } from "dns";
import { Item } from "./components/shopping-item";

// Defines the shape of component props and the todo object, or to type them

export interface EmptyInterface {}

export interface GreetingPropsInterface {
  name: string;
}

export interface GreetingStateInterface {
  clicks: number;
}

export interface ShoppingListStateInterface {
  newitem: Item;
  items: Array<Item>;
}

export interface ShoppingItemPropsInterface {
  item: Item;
  clicked: any;
  removed: any;
}
