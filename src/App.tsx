import { Route, Routes } from 'react-router-dom';
import './App.css'
import BottomNavigationBar from './components/ui/layout/bottom-navigation-bar/BottomNavigationBar.tsx';

/* Importing the pages */
import Explore from './pages/Explore';
import Map from './pages/Map';
import AccountPosted from './pages/AccountPosted';
import Filter from './pages/Filter';
import Search from './pages/Search';
import Saved from './pages/Saved';
import Post from './pages/Post';
import Onboarding from './pages/Onboarding';
import Preboarding from './pages/Preboarding';
import Account from './pages/Account';


function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={<Explore />} />
      <Route path="/map" element={<Map />} />
      <Route path="/account" element={<Account />} />
      <Route path="/account-posted" element={<AccountPosted />} />
      <Route path="/filter" element={<Filter />} />
      <Route path="/search" element={<Search />} />
      <Route path="/saved" element={<Saved />} />
      <Route path="/post" element={<Post />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/preboarding" element={<Preboarding />} />
    </Routes>
    </>
  )
}

export default App
