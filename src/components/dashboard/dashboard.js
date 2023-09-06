import { Outlet } from 'react-router-dom';
import './dashboard.css';
import LeftSidebar from './sidebar/leftsidebar';

const Dashboard = () => (
  <div className="dashboard-layout">

    <LeftSidebar />
    <div className="dashboard-content">
      <Outlet />
    </div>
  </div>
);

export default Dashboard;
