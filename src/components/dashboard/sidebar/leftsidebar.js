import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from './logo.png';
import { getSession } from '../../../redux/createslice/SessionSlice';

const LeftSidebar = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session);

  useEffect(() => {
    dispatch(getSession());
  }, [dispatch]);

  console.log(sessionUser);

  return (
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
            <NavLink to="furnitures" className={({ isActive }) => ((isActive) ? ('nav-link active-link') : ('nav-link'))}>
              Furniture
              {' '}
            </NavLink>
          </li>
          <li className="item">
            <NavLink to="appointments" className={({ isActive }) => ((isActive) ? ('nav-link active-link') : ('nav-link'))}>
              Appointment
              {' '}
            </NavLink>
          </li>
          <li className="item">
            <NavLink to="details" className={({ isActive }) => ((isActive) ? ('nav-link active-link') : ('nav-link'))}>
              Sold History
            </NavLink>
          </li>
          <li className="item">
            <NavLink to="appoints" className={({ isActive }) => ((isActive) ? ('nav-link active-link') : ('nav-link'))}>
              Discount
            </NavLink>
          </li>
          <li className="item">
            <NavLink to="furnitures" className={({ isActive }) => ((isActive) ? ('nav-link active-link') : ('nav-link'))}>
              Trash
            </NavLink>
          </li>
        </ul>
        <ul className="category-list">
          <li className="item">
            <NavLink to="customers" className={({ isActive }) => ((isActive) ? ('nav-link active-link') : ('nav-link'))}>Customer</NavLink>
          </li>
          <li className="item">
            <NavLink to="furnitures" className={({ isActive }) => ((isActive) ? ('nav-link active-link') : ('nav-link'))}>Our Address</NavLink>
          </li>
          <li className="item">
            <NavLink to="furnitures" className={({ isActive }) => ((isActive) ? ('nav-link active-link') : ('nav-link'))}>Help</NavLink>
          </li>
          <li className="item">
            <NavLink to="furnitures" className={({ isActive }) => ((isActive) ? ('nav-link active-link') : ('nav-link'))}>Logout</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSidebar;
