import './addfurniture.css';

const AddFurniture = (data) => {
  const { addnewfurniture } = data;
  return (
    <div className="popup-furniture">
      <div id="modal-content" className="furniture-modal">
        <div className="popup">
          <div className="add-header">
            <h2>Add New Furniture</h2>
            <button type="button" className="close" onClick={addnewfurniture}>&times;</button>
          </div>
          <div className="content">
            <form className="form">
              <div className="form-group">
                <label htmlFor="name">
                  Name
                  <input type="text" id="name" className="form-control" placeholder="Enter Furniture Name" minLength="2" maxLength="50" required />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="serial_number">
                  Serial Number
                  <input type="text" id="serial_number" className="form-control" name="serial_number" placeholder="Enter Furniture Serial Number" pattern="[0-9A-Za-z]" />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="upfront_price">
                  Upfront Price
                  <input type="number" id="upfront_price" name="upfront_price" step="0.01" className="form-control" placeholder="Enter Furniture Upfront fee" min="0" max="99999" />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="total_price">
                  Total Price
                  <input type="number" id="total_price" name="total_price" step="0.01" className="form-control" placeholder="Enter Furniture Price" min="0" max="99999" />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="price">
                  Furniture Image
                  <input type="text" id="image" name="image" className="form-control" placeholder="Enter Furniture Image address" maxLength="5000" />
                </label>
              </div>
              <div className="form-group">
                <button type="submit" className="btn form-group-button">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFurniture;
