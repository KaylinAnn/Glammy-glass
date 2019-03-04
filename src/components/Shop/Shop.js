import React, { Component } from "react";
import "./Shop.css";
import axios from "axios";
import { connect } from "react-redux";
import { getAllProducts } from "../../Redux/reducer";

export class Shop extends Component {
  componentDidMount() {
    axios.get("/api/products").then(res => {
      this.props.getAllProducts(res.data);
    });
  }

  render() {
    const { products } = this.props;

    const mappedProducts = products.map(product => {
      return (
        <div className="product-container" key={product.productid}>
          <img
            className="main-image"
            src={product.imgUrl[0]}
            alt="glass"
            // add currentTtarget.class to reformat secons img
            onMouseOver={e => (e.currentTarget.src = product.imgUrl[1])}
            onMouseOut={e => (e.currentTarget.src = product.imgUrl[0])}
          />

          <h1>{product.productname}</h1>
          <h2>${product.price}</h2>
        </div>
      );
    });

    return (
      <div className="shop">
        <div className="shop-container">{mappedProducts}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { products } = state;
  return { products };
};

const mapDispatchToProps = {
  getAllProducts
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
