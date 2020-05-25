import React, { useEffect } from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";

import { connect } from "react-redux";

// import callApi from "../../utils/callApi";
import { Link } from "react-router-dom";
import {
  actFetchProductsRequest,
  actDeleteProductRequest,
} from "../../actions";

function ProductListPage(props) {
  var { products } = props; // Gọi từ redux

  // const [products, setProducts] = useState([]);

  useEffect(() => {
    // callApi("api/products/", "GET", null).then((res) => setProducts(res.data));
    props.fetchAllProducts();
  }, []);

  const onDelete = (id) => {
    // callApi(`api/products/${id}`, "DELETE", null).then((res) =>
    //   setProducts(res.data)
    // );
    props.onDeleteProduct(id);
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

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequest());
    },
    onDeleteProduct: (id) => {
      dispatch(actDeleteProductRequest(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
