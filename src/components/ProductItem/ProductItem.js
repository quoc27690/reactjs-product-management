import React from "react";
import { Link } from "react-router-dom";

export default function ProductItem(props) {
  var { product, index } = props;
  var { onDelete } = props;

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
        <Link
          to={`/product/${product._id}/edit`}
          className="btn btn-outline-warning mr-3"
        >
          Fix
        </Link>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => {
            // eslint-disable-next-line no-restricted-globals
            if (confirm("Are You Sure Delete?")) {
              // Gọi hàm onDelete từ props và truyền ngược lại product._id
              onDelete(product._id);
            }
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
