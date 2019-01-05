import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "./Home.css";

export class Home extends Component {
  render() {
    const glammyHomeImgs = [
      {
        original:
          "https://res.cloudinary.com/dclawygaw/image/upload/v1544820538/wedding-stuff-banner_2.png"
      },
      {
        original:
          "https://res.cloudinary.com/dclawygaw/image/upload/v1544815324/15111091_1233396400064155_6450213301282374989_o.jpg"
      },
      {
        original:
          "https://res.cloudinary.com/dclawygaw/image/upload/v1544819598/wedding-banner_2.png"
      },
      {
        original:
          "https://res.cloudinary.com/dclawygaw/image/upload/v1544815322/14379902_1168818926521903_8113176059438335496_o.jpg"
      }
    ];
    return (
      <div className="home">
        <div className="gallery-container">
          <ImageGallery
            className="image-gallery"
            items={glammyHomeImgs}
            showFullscreenButton={false}
            showPlayButton={false}
            showThumbnails={false}
          />
          <div className="text-container">
            <div className="border" />
            <h2 className="text-title">Hand Etched Glasses</h2>
            <h3 className="text-body">
              Magnificent color, skilled craftsmanship and creative design make
              Blenko the most colorful name in glass.
            </h3>
            <div className="border" />
            <div />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
