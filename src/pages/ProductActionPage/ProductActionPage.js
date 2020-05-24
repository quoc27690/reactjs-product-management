import React, { useState, useEffect } from "react";
import callApi from "../../utils/callApi";
import { Link } from "react-router-dom";

export default function ProductActionPage(props) {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    status: false,
  });

  const { history, match } = props;

  const onChange = (e) => {
    var value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    var name = e.target.name;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  // Khi click button Save sẽ gởi thông tin 1 product được tạo mới lên server
  const onClick = (e) => {
    e.preventDefault();
    console.log(product);
    // Có 2 trường hợp: create new & fix
    if (match) {
      callApi(`api/products/${match.params.id}`, "PUT", {
        name: product.name,
        price: product.price,
        status: product.status,
      }).then((res) => history.goBack());
    } else {
      callApi("api/products", "POST", {
        name: product.name,
        price: product.price,
        status: product.status,
      }).then((res) => history.goBack());
    }
  };

  // Khi click button Fix sẽ gởi thông tin 1 product cho form Fix
  useEffect(() => {
    if (match) {
      console.log(match);
      callApi(`api/products/${match.params.id}`, "GET", null).then((res) => {
        setProduct({
          name: res.data.name,
          price: res.data.price,
          status: res.data.status,
        });
      });
    }
  }, [match]);

  return (
    <div className="row">
      <div className="col-4"></div>
      <div className="col-4">
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={product.name}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="text"
              className="form-control"
              name="price"
              value={product.price}
              onChange={onChange}
            />
          </div>
          <div className="form-check form-check-inline mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="status"
              value={product.status}
              onChange={onChange}
              checked={product.status}
            />
            <label className="form-check-label">Stocking</label>
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-outline-primary mr-3"
              onClick={onClick}
            >
              Save
            </button>
            <Link to="/product-list" className="btn btn-outline-secondary">
              Back
            </Link>
          </div>
        </form>
      </div>
      <div className="col-4"></div>
    </div>
  );
}
