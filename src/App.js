import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Admins from './/pages/Admins'
import Users from './pages/Users'
import Transactions from './pages/Transactions'
import Products from './pages/Products'
import SideBar from './components/SideBar';

function App() {
  return (
    <BrowserRouter>
    <SideBar>
    <Routes>
      <Route path="/" element={<Dashboard/>}  />
      <Route path="/dashboard" element={<Dashboard/>}  />
      <Route path="/admins" element={<Admins/>}  />
      <Route path="/users" element={<Users/>}  />
      <Route path="/transactions" element={<Transactions/>}  />
      <Route path="/products" element={<Products/>}  />
    </Routes>
    </SideBar>
    </BrowserRouter>
  );
}

export default App;
