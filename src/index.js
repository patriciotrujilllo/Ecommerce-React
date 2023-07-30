import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {FiltersProvider} from './context/filters'
import { CartProvider } from "./context/cart"
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </CartProvider>
  
);
