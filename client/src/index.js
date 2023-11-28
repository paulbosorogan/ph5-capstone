import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProvider } from './contexts/UserContext';
import {BrowserRouter} from 'react-router-dom'
import { ItemsProvider } from './contexts/ItemsContext';
import { OrdersProvider } from './contexts/OrdersContext';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <UserProvider>
        <OrdersProvider>
        <ItemsProvider>
          <ReactNotifications/>
          <App />
      </ItemsProvider>
      </OrdersProvider>
    </UserProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

