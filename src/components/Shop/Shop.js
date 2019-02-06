import React, { Component } from "react";
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
      console.log(product);

      return (
        <div key={product.productid}>
          <h1>{product.productname}</h1>
          <p>{product.description}</p>
          <h2>${product.price}</h2>
        </div>
      );
    });

    return (
      <div>
        <div>{mappedProducts}</div>
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
