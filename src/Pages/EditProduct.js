import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const EditProduct = () => {
  const { product } = useParams();
  const history = useHistory();
  let savedData = JSON.parse(localStorage.getItem(product));
  const [newState, setNewState] = useState({
    id: savedData.id,
    name: savedData.name,
    price: savedData.price,
  });

  let editedProduct = {
    id: newState.id,
    name: newState.name,
    price: newState.price,
  };

  const editProduct = (e) => {
    e.preventDefault();
    let editCachedDate = localStorage.setItem(
      editedProduct.id.toString(),
      JSON.stringify(editedProduct)
    );
    history.push({ pathname: "/", data: editCachedDate });
    setNewState("");
  };

  const handleOnChange = (e) => {
    const value = e.target.value;
    setNewState({ ...newState, [e.target.name]: value });
  };
  return (
    <div className="container">
      <div className="page-title-section">
        <h3 className="grey-300">Edit product</h3>
      </div>
      <div className="form-card">
        <form onSubmit={editProduct}>
          <div>
            <label className="input-label">Product name</label>
            <input
              className="input"
              type="text"
              placeholder="Product name"
              name="name"
              value={newState.name}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label className="input-label">Price</label>
            <input
              className="input"
              type="text"
              placeholder="Eg. 5.00"
              name="price"
              value={newState.price}
              onChange={handleOnChange}
            />
          </div>
          <div style={{ paddingTop: "8px" }}></div>
          <button className="button fluid" type="submit">
            Save Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
