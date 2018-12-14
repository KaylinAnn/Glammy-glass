import React, { Component } from 'react'
import './Home.css'


export class Home extends Component {
  render() {
    return (
      <div className='home'>
        <header>
          <div className="top-nav">
            <div className='social-media-container'>
              <a className='icon' href="https://www.facebook.com/pg/glammyglassdesigns/photos/?ref=page_internal" target='_blank'>
                <i className="fab fa-facebook-square"></i>
              </a>
              <a className='icon' href="https://www.instagram.com/glammy_glass/" target='_blank'>
                <i className="fab fa-instagram"></i>
              </a>
              <a className='icon' href="https://twitter.com/glammyglass" target='_blank'>
                <i className="fab fa-twitter-square"></i>
              </a>
            </div>
            <div className='line'>|</div>
            <div className='signin-cart-container'>

              <div>SIGN IN or RESGISTER</div>
              <div>CART</div>
            </div>

          </div>
        </header>
        <h1>Glammy Glass Home</h1>
      </div >
    )
  }
}

export default Home
