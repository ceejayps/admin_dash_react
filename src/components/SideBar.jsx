import React, {useState } from "react";
import {
  FaBars,
  FaCog,
  FaDollarSign,
  FaIcons,
  FaTh,
  FaTools,
  FaUser,
  FaUserCog,
  FaUserSecret,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SideBar = ({children}) => {
  const [isOpen , setIsOpen] = useState(true)
  const toggle = ()=> setIsOpen(!isOpen);
  const menuItems = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/admins",
      name: "Admins",
      icon: <FaUserCog />,
    },
    {
      path: "/users",
      name: "Users",
      icon: <FaUser />,
    },
    {
      path: "/transactions",
      name: "Transactions",
      icon: <FaDollarSign />,
    },
    {
      path: "/products",
      name: "Products",
      icon: <FaIcons />,
    },
  ];
  return (
    <div className="Container">
     
        <div style={{width: isOpen? '150px' : '50px'}} className="sidebar">
          <div  className="topSection" onClick={toggle}>
            <h1 style={{display: isOpen? 'block' : 'none'}} className="logo">LOGO</h1>
            <div style={{marginLeft: isOpen? '40px' : '-5px' }} className="bars">
              <FaBars/>
            </div>
          </div>
          <div className="navItems">
          <div >
          {menuItems.map((item, index) => (
            <NavLink to={item.path} key={index} style={{ justifyContent: isOpen? "left":"center" }} className="links">
              <div className="icon">{item.icon}</div>
              <div style={{display: isOpen? 'block' : 'none', justifyContent: isOpen? "center" : "left"}} className="link_text">{item.name}</div>
            </NavLink>
          ))}

          </div>
          <div className="">
          <NavLink to={'/settings'} key={5} className="links" >
              <div className="icon">{<FaTools/>}</div>
              <div style={{display: isOpen? 'block' : 'none'}} className="link_text">{"Settings"}</div>
            </NavLink>
          </div>
          </div>
        </div>
      
      <main>{children}</main>
    </div>
  );
};

export default SideBar;
