import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Customers from './assets/Customers/customers.jsx'
import Polices from './assets/policies/polices.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Customers/>
    <Polices/>
  </StrictMode>,
)
