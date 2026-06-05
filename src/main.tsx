import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

/* importere Objekter fra react-router-dom til Routing */
import { HashRouter } from "react-router-dom";

/* Importing global styles */
import './styles/global.css'


// Ændret fra BrowserRoute til HashRouter, så vi kan gå direkte explore uden, at gå igennem preboarding og onboarding.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
)
