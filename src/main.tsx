import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

/* importere Objekter fra react-router-dom til Routing */
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

/* Importing the global styles */
import './styles/global.css'

/* siderne */







/* Routing objekt  med alle vores sider */
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='/home' element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact />} />
//     </Route>
//   )
// );

createRoot(document.getElementById('root')!).render(
   <StrictMode>
    <App />
  </StrictMode>,
)
