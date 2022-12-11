import './sideBar.css';
import './navBar.css';
import './pageTemplate.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Admins from './/pages/Admins'
import Users from './pages/Users'
import Transactions from './pages/Transactions'
import Products from './pages/Products'
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import Post from './pages/Post';
import SignIn from './pages/SignIn';
import FourOhFour from './pages/404';
const isLogedIn = !true;

function App() {
  
  return isLogedIn? (
    <BrowserRouter>
    <SideBar>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Dashboard/>}  />
      <Route path="/dashboard" element={<Dashboard/>}  />
      <Route path="/admins" element={<Admins/>}  />
      <Route path="/users" element={<Users/>}  />
      <Route path="/post" element={<Post/>}  />
      <Route path="/products" element={<Products/>}  />
    </Routes>
    </SideBar>
    </BrowserRouter>
  ):(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn/>}  />
      <Route path="/dashboard" element={<SignIn/>}  />
      <Route path="/admins" element={<SignIn/>}  />
      <Route path="/users" element={<SignIn/>}  />
      <Route path="/post" element={<SignIn/>}  />
      <Route path="/products" element={<SignIn/>}  />
      <Route path="*" element={<FourOhFour/>}  />
    </Routes>
  
    </BrowserRouter>
  );
}

export default App;
