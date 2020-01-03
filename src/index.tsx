// Import dependencies
import React, { Component } from 'react'

import { render } from 'react-dom'

// Import components
import ShoppingList from './components/shopping-list'
import Greeting from './components/greeting'

// Import styles
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/styles.scss'


const App = () =>
{

    return (
      <div
       className="container main">
           <ShoppingList />
      </div>
    );
  
}


const rootElement = document.getElementById('root')
render(<App />, rootElement)