import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "./Home.css";

export class Home extends Component {
  render() {
    const glammyHomeImgs = [
      {
        original:
          "https://res.cloudinary.com/dclawygaw/image/upload/v1547056939/weddingglammy.jpg"
      },
      {
        original:
          "https://res.cloudinary.com/dclawygaw/image/upload/v1547055425/miscglammy.jpg"
      },
      {
        original:
          "https://res.cloudinary.com/dclawygaw/image/upload/v1547057085/3basesglammy2.jpg"
      }
      // {
      //   original:
      //     "https://res.cloudinary.com/dclawygaw/image/upload/v1547054963/glammyshow2.jpg"
      // }
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
