import React, { useState, useEffect } from "react";
import callApi from "../../utils/callApi";
import { Link } from "react-router-dom";

export default function ProductActionPage(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState(true);

  const { history, match } = props;

  const onClick = (e) => {
    e.preventDefault();
    callApi("api/products", "POST", {
      name: name,
      price: price,
      status: status,
    }).then((res) => history.goBack());
  };

  useEffect(() => {
    if (match) {
      callApi(`api/products/${match.params.id}`, "GET", null).then((res) => {
        setName(res.data.name);
      });
      callApi(`api/products/${match.params.id}`, "GET", null).then((res) => {
        setPrice(res.data.price);
      });
      callApi(`api/products/${match.params.id}`, "GET", null).then((res) => {
        setStatus(res.data.status);
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
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="text"
              className="form-control"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="status"
              value={status}
              onChange={(e) => {
                setStatus(e.target.value === "true"); // convert string to Boolean
              }}
              checked={status === true ? true : false}
            />
            <label className="form-check-label">Stocking</label>
          </div>
          <div className="form-check form-check-inline mb-3">
            <input
              className="form-check-input"
              type="radio"
              name="status"
              value={status}
              onChange={(e) => {
                setStatus(e.target.value === "false");
              }}
              checked={status === false ? true : false}
            />
            <label className="form-check-label">Out of stock</label>
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
