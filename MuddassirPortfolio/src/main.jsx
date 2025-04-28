import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';




import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
