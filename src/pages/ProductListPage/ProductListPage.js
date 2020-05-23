import React, { useState, useEffect } from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";

import { connect } from "react-redux";

import callApi from "../../utils/apiCaller";

function ProductListPage(props) {
  // var { products } = props; // Gọi từ redux

  const [products, setProducts] = useState([]);

  useEffect(() => {
    callApi("api/products", "GET", null).then(function (res) {
      setProducts(res.data);
    });
  }, []);

  return (
    <div>
      <button type="button" className="btn btn-outline-primary mb-3">
        Add A New Product
      </button>
      <ProductList>
        {products.map((product, index) => (
          <ProductItem key={index} product={product} index={index} />
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
