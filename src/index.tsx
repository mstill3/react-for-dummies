// Import dependencies
import React, { Component } from 'react'

import { render } from 'react-dom'

// Import components
// import Greeting from './components/greeting'
import Greeting from './components/greeting'

// Import styles
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/styles.scss'


// let names: Array<string> = ['Matt', 'Mike', 'Max'];

// TodoListApp component
// const App = () => {
//   return (
//     <div className="container">
//       {
//         names.map((n) => (
//           <Greeting name={n} />
//         ))
//       }
//     </div>
//   )
// }

class App extends Component
{

  render = () =>
  {
    return (
      <div
       className="container shiftdown">
          <Greeting 
           name="Matt"/>
      </div>
    );
  }
  
}


const rootElement = document.getElementById('root')
render(<App />, rootElement)
