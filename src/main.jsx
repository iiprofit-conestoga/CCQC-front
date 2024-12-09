import React from "react";
import { Provider } from "react-redux"; // Import Provider from react-redux
import store from "./store/Store"; // Import the Redux store
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}> {/* Wrap App with Provider */}
      <App />
    </Provider>
  </StrictMode>,
)
