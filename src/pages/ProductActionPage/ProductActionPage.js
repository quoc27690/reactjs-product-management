import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  actAddProductRequest,
  actGetProductRequest,
  actUpdateProductRequest,
} from "../../actions";

class ProductActionPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      price: "",
      status: false,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    if (match) {
      var id = match.params.id;
      console.log(id);
      this.props.onEditProduct(id);
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      var { itemEditing } = nextProps;
      this.setState({
        name: itemEditing.name,
        price: itemEditing.price,
        status: itemEditing.status,
      });
    }
  }

  // Khi gõ thì dữ liệu state được cập nhật
  onChange = (e) => {
    var value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    var name = e.target.name;
    this.setState({
      [name]: value,
    });
  };

  onClick = (e) => {
    e.preventDefault();
    const { match, history } = this.props;
    const { name, price, status } = this.state;
    var product = {
      name,
      price,
      status,
    };
    // Có 2 trường hợp: create new & Fix
    if (match) {
      var id = match.params.id;
      this.props.onUpdateProduct(id, product);
    } else {
      this.props.onAddProduct(product);
    }
    history.goBack();
  };

  render() {
    const { name, price, status } = this.state;
    return (
      <div>
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
                  value={name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Price</label>
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  value={price}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-check form-check-inline mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="status"
                  value={status}
                  onChange={this.onChange}
                  checked={status}
                />
                <label className="form-check-label">Stocking</label>
              </div>
              <div>
                <button
                  type="submit"
                  className="btn btn-outline-primary mr-3"
                  onClick={this.onClick}
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemEditing: state.itemEditing,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: (product) => {
      dispatch(actAddProductRequest(product));
    },
    onEditProduct: (id) => {
      dispatch(actGetProductRequest(id));
    },
    onUpdateProduct: (id, product) => {
      dispatch(actUpdateProductRequest(id, product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
