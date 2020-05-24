import React, { useState, useEffect } from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";

import { connect } from "react-redux";

import callApi from "../../utils/callApi";
import { Link } from "react-router-dom";

function ProductListPage(props) {
  // var { products } = props; // Gọi từ redux

  const [products, setProducts] = useState([]);

  useEffect(() => {
    callApi("api/products", "GET", null).then((res) => {
      setProducts(res.data);
    });
  }, []);

  const onDelete = (id) => {
    callApi(`api/products/${id}`, "DELETE", null).then((res) =>
      setProducts(res.data)
    );
  };

  return (
    <div>
      <Link to="/product/add" className="btn btn-outline-primary mb-3">
        Add A New Product
      </Link>
      <ProductList>
        {products.map((product, index) => (
          <ProductItem
            key={index}
            product={product}
            index={index}
            onDelete={onDelete}
          />
        ))}
      </ProductList>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, null)(ProductListPage);
