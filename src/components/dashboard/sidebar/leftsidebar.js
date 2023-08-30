import { NavLink } from 'react-router-dom';
import logo from './logo.png';

const LeftSidebar = () => (
  <div className="leftsidebar-container">
    <div className="upper-part">
      <div className="app-logo">
        <div className="logo-image">
          <img src={logo} alt="Application Logo" />
          <h3>Dashboard</h3>
        </div>
      </div>
    </div>
    <div className="left-content">
      <ul className="nav-list">
        <li className="item">
          <NavLink to="/furnitures" className="nav-link">Furniture</NavLink>
        </li>
        <li className="item">
          <NavLink to="/furnitures" className="nav-link">Appointment</NavLink>
        </li>
        <li className="item">
          <NavLink to="/furnitures" className="nav-link">Sold History</NavLink>
        </li>
        <li className="item">
          <NavLink to="/furnitures" className="nav-link">Discount</NavLink>
        </li>
        <li className="item">
          <NavLink to="/furnitures" className="nav-link">Trash</NavLink>
        </li>
      </ul>
      <ul className="category-list">
        <li className="item">
          <NavLink to="/furnitures" className="nav-link">Customer</NavLink>
        </li>
        <li className="item">
          <NavLink to="/furnitures" className="nav-link">Our Address</NavLink>
        </li>
        <li className="item">
          <NavLink to="/furnitures" className="nav-link">Help</NavLink>
        </li>
        <li className="item">
          <NavLink to="/furnitures" className="nav-link">Logout</NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default LeftSidebar;
