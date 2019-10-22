import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App/App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)

// const logo = document.querySelectorAll("#logo path");
// for (let i= 0;i<logo.length;i++){
//   console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
  
// }
