import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

/* importere Objekter fra react-router-dom til Routing */
import { BrowserRouter} from 'react-router-dom';

/* Importing the global styles */
import './styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/gemly-project-webapplication">
      <App />
    </BrowserRouter>
  </StrictMode>
)
