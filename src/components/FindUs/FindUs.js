import React, { Component } from "react";
import "./FindUs.css";

export class FindUs extends Component {
  render() {
    return (
      <div className="find-us">
        <div className="find-us-intro">
          <h1>Come see us in person!</h1>
          <p>
            Glammy glass can be found in a few hand-selected butiques across
            Arizona and Southern California.
          </p>
          <div className="locations-container">
            <div className="arizona-locations">
              <h2>ARIZONA</h2>
              <div className="item">
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/The+Hangin+Tree/@34.869565,-111.761415,15z/data=!4m5!3m4!1s0x0:0x995a884c34f01081!8m2!3d34.869565!4d-111.761415"
                >
                  <p className="sedona new-label">
                    <span className="align">Sedona</span>
                  </p>
                </a>
              </div>
              <div className="item">
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/The+Hangin+Tree/@34.869565,-111.761415,15z/data=!4m5!3m4!1s0x0:0x995a884c34f01081!8m2!3d34.869565!4d-111.761415"
                >
                  <p className="havasu new-label">
                    <span className="align">Lake Havasu City</span>
                  </p>
                </a>
              </div>
            </div>
            <div className="cali-locations">
              <h2>CALIFORNIA</h2>
              <div className="item">
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/Timberline+In+the+Glen/@34.254937,-117.171453,15z/data=!4m2!3m1!1s0x0:0x40c25ab6c2da7895?ved=2ahUKEwjJ_Ibg2OHfAhXwJDQIHTFoA2UQ_BIwCnoECAYQCA"
                >
                  <p className="arrowhead new-label">
                    <span className="align">Arrowhead</span>
                  </p>
                </a>
              </div>
              <div className="item">
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/Madonna+Inn/@35.2674132,-120.6746599,15z/data=!4m2!3m1!1s0x0:0x6f2837fd2edba5ec?ved=2ahUKEwj0oJyF3-HfAhXmHDQIHXEnAJ0Q_BIwGnoECAIQCA"
                >
                  <p className="obispo new-label">
                    <span className="align">San Luis Obispo</span>
                  </p>
                </a>
              </div>
            </div>
          </div>

          {/* <ul>
              Arizona
              <li className="sedona">Sedona</li>
              <li>Lake Havasu City</li>
              <li>Scottsdale</li>
            </ul>
            <ul>
              California
              <li>Arrowhead</li>
              <li>San Luis Obispo</li>
            </ul> */}

          <p>
            We love traveling to art shows and festivals. Find out where we are
            going to be next below.
          </p>
        </div>
      </div>
    );
  }
}

export default FindUs;
