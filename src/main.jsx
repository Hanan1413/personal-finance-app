import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {PotProvider} from './contexts/potContext/PotContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PotProvider>
    <App />

    </PotProvider>
  </StrictMode>,
)
