import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <header>
          <div className="top-nav">
            <div className="social-media-container">
              <a
                className="icon"
                href="https://www.facebook.com/pg/glammyglassdesigns/photos/?ref=page_internal"
                target="_blank"
              >
                <i className="fab fa-facebook-square" />
              </a>
              <a
                className="icon"
                href="https://www.instagram.com/glammy_glass/"
                target="_blank"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                className="icon"
                href="https://twitter.com/glammyglass"
                target="_blank"
              >
                <i className="fab fa-twitter-square" />
              </a>
            </div>
            <div className="line">|</div>
            <div className="signin-cart-container">
              <div>SIGN IN or RESGISTER</div>
              <Link className="link" to="/cart">
                <div className="cart">CART</div>
              </Link>
            </div>
          </div>
        </header>
        <div>
          <Link className="title" to="/">
            <button className="title">Glammy Glass</button>
          </Link>
          <div className="nav-container">
            <Link className="link" to="/shop">
              <div>SHOP</div>
            </Link>
            <Link className="link" to="/">
              <div>HOME</div>
            </Link>
            <Link className="link" to="/findus">
              <div>VISIT</div>
            </Link>
            <Link className="link" to="/aboutus">
              <div>LEARN</div>
            </Link>
            <Link className="link" to="/custom">
              <div>CUSTOM</div>
            </Link>
            <Link className="link" to="/contactus">
              <div>CONTACT US</div>
            </Link>
            <Link className="link" to="/gallery">
              <div>GALLERY</div>
            </Link>
          </div>
          <div className="bottom-border" />
        </div>
      </div>
    );
  }
}

export default Nav;
