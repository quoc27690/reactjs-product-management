import React from "react";

export default function ProductItem(props) {
  var { product, index } = props;

  var statusName = product.status ? "Stocking" : "Out of stock";
  var classNameStatus = product.status
    ? "btn-outline-primary"
    : "btn btn-outline-secondary";

  return (
    <tr>
      <td>{index + 1}</td>
      <td className="text-left">{product.name}</td>
      <td>{product.price}</td>
      <td>
        <button type="button" className={`btn ${classNameStatus}`}>
          {statusName}
        </button>
      </td>
      <td>
        <button type="button" className="btn btn-outline-warning mr-3">
          Fix
        </button>
        <button type="button" className="btn btn-outline-danger">
          Delete
        </button>
      </td>
    </tr>
  );
}
