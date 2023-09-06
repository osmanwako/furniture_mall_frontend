import { NavLink } from 'react-router-dom';
import defaultimage from '../../assets/furnitures.jpg';
import forwardicon from '../../assets/next.png';
import backwardicon from '../../assets/previous.png';

const FurnitureItem = (data) => {
  const { furnitures, item, getnext } = data;
  const prevdisabled = item === 0;
  const nextdisabled = item === furnitures.length - 1;
  if (furnitures.length === 0) {
    return (
      <div className="furniture-item">
        No Registered Furniture
      </div>
    );
  }
  const furniture = furnitures[item];
  console.log(furniture);
  let fimage = furniture?.image;
  if (fimage === 'furniture.png' || fimage === null) {
    fimage = defaultimage;
  }
  return (
    <div className="furniture-list">
      <div className="furniture-item">
        <button type="button" disabled={prevdisabled} className="next-button" onClick={() => getnext(-1)}>
          <img src={backwardicon} alt="Furniture" className="next-icon" />
        </button>
        <img src={fimage} className="fitem-image" alt="Furniture" />
        <button type="button" disabled={nextdisabled} className="next-button" onClick={() => getnext(1)}>
          <img src={forwardicon} alt="Furniture" className="next-icon" />
        </button>
      </div>
      <div className="fitem-details">
        <div className="item-name">
          <NavLink to="/furnitures/1" className="item-nav-details">{furniture?.name}</NavLink>
        </div>
        <div className="item-price">
          <strong>
            Upfront Payment:
            {furniture?.upfront_price}
            USD
          </strong>
          <strong>
            Total Price:
            {furniture?.total_price}
            USD
          </strong>
          <strong>
            Warranty Year:
            {furniture?.total_price}
            Years
          </strong>
        </div>
      </div>
      <div className="fitem-details">
        <div className="action-details">
          <NavLink to="/furnitures/1" className="item-nav-details">Book</NavLink>
          <NavLink to="/furnitures/1" className="item-nav-details">On Sale</NavLink>
          <NavLink to="/furnitures/1" className="item-nav-details">Archive</NavLink>
          <NavLink to="/furnitures/1" className="item-nav-details">Sold</NavLink>
        </div>
      </div>
    </div>
  );
};

export default FurnitureItem;
