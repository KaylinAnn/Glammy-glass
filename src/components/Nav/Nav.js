import React, { Component } from "react";
import "./Nav.css";

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
              <div>CART</div>
            </div>
          </div>
        </header>
        <div>
          <h2 className="title">Glammy Glass</h2>
          <div className="nav-container">
            <div>SHOP</div>
            <div>HOME</div>
            <div>VISIT</div>
            <div>LEARN</div>
            <div>CUSTOM</div>
            <div>CONTACT US</div>
          </div>
          <div className="bottom-border" />
        </div>
      </div>
    );
  }
}

export default Nav;
