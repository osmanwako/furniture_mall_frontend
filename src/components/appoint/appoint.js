import { useState } from 'react';
import { useSelector } from 'react-redux';
import './appointment.css';
import FurnitureItem from '../furniture/fitem';

const Appointment = () => {
  const furniturestate = useSelector((state) => state.furniturestate);
  const { furnitures } = furniturestate;

  const [start, setstart] = useState(0);
  const getnext = (i) => {
    setstart(() => start + i);
  };

  return (
    <div className="furniture-container">
      <div className="furniture-header">
        <h2>My Appointment Lists </h2>
      </div>
      <div className="furniture-content">
        <FurnitureItem furnitures={furnitures} item={start} getnext={getnext} />
      </div>
    </div>
  );
};
export default Appointment;
