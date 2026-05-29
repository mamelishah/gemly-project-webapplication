import { Routes } from 'react-router-dom';
import './App.css'
import TopBar from './components/ui/layout/TopBar';
import BottomNavigationBar from './components/ui/layout/bottom-navigation-bar/BottomNavigationBar.tsx';

/* Importing the pages */
import Explore from './pages/Explore';
import Map from './pages/Map';
import Account from './pages/Account';


function App() {

  return (
    <>
       <Routes>
      <Route path="/" element={<Explore />} />
      <Route path="/map" element={<Map />} />
      <Route path="/account" element={<Account />} />
    </Routes>
    </>
  )
}

export default App
