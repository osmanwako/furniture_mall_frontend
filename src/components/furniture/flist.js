import { useState } from 'react';
import { useSelector } from 'react-redux';
import './furniture.css';
import './fitem.css';
import FurnitureItem from './fitem';
import AddFurniture from './addfurniture';

const FurnitureList = () => {
  const furniturestate = useSelector((state) => state.furniturestate);
  const { furnitures } = furniturestate;

  const [newfurniture, setNewfurniture] = useState(true);
  const addnewfurniture = () => {
    setNewfurniture(() => !newfurniture);
  };
  const [start, setstart] = useState(0);
  const getnext = (i) => {
    setstart(() => start + i);
  };

  return (
    <div className="furniture-container">
      <div className="furniture-header">
        <h2>Furnitures Lists </h2>
        <div className="furniture-create">
          {newfurniture ? (
            <button type="button" className="btn-new" name="Addnew" onClick={addnewfurniture}>
              <span className="btn-new-icon">&#43;</span>
              <span className="btn-new-text">New</span>
            </button>
          ) : (
            <AddFurniture addnewfurniture={addnewfurniture} />
          )}
        </div>
      </div>
      <div className="furniture-content">
        <FurnitureItem furnitures={furnitures} item={start} getnext={getnext} />
      </div>
    </div>
  );
};

export default FurnitureList;
