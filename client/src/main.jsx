import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ListApp } from './components/ListApp.jsx'
import "../index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListApp/>
  </StrictMode>,
)
