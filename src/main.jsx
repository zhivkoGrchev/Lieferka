import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header.jsx'
import App from './App.jsx'
import Footer from './Footer.jsx'
import './index.css'
import { ShopContextProvider } from './Context/ShopContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ShopContextProvider>
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
    </BrowserRouter>
    </ShopContextProvider>
  </React.StrictMode>,
)
