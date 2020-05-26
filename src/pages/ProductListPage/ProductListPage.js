import React, { Component } from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  actFetchProductsRequest,
  actDeleteProductRequest,
} from "../../actions";

class ProductListPage extends Component {
  componentDidMount() {
    this.props.fetchAllProducts();
  }

  onDelete = (id) => {
    this.props.onDeleteProduct(id);
  };

  render() {
    const { products } = this.props;
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
              onDelete={this.onDelete}
            />
          ))}
        </ProductList>
      </div>
    );
  }
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
