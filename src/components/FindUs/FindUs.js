import React, { Component } from "react";
import "./FindUs.css";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
// import events from "../../Dates";

export class FindUs extends Component {
  render() {
    const localizer = BigCalendar.momentLocalizer(moment);
    const dummyEvents = [
      {
        id: 0,
        title: "All Day Event very long title",
        allDay: true,
        start: new Date(2015, 3, 0),
        end: new Date(2015, 3, 1)
      },
      {
        id: 1,
        title: "Long Event",
        start: new Date(2015, 3, 7),
        end: new Date(2015, 3, 10)
      },

      {
        id: 2,
        title: "DTS STARTS",
        start: new Date(2016, 2, 13, 0, 0, 0),
        end: new Date(2016, 2, 20, 0, 0, 0)
      },

      {
        id: 3,
        title: "DTS ENDS",
        start: new Date(2016, 10, 6, 0, 0, 0),
        end: new Date(2016, 10, 13, 0, 0, 0)
      },

      {
        id: 4,
        title: "Some Event",
        start: new Date(2015, 3, 9, 0, 0, 0),
        end: new Date(2015, 3, 10, 0, 0, 0)
      },
      {
        id: 5,
        title: "Conference",
        start: new Date(2015, 3, 11),
        end: new Date(2015, 3, 13),
        desc: "Big conference for important people"
      },
      {
        id: 6,
        title: "Meeting",
        start: new Date(2019, 3, 12, 10, 30, 0, 0),
        end: new Date(2019, 3, 12, 12, 30, 0, 0),
        desc: "Pre-meeting meeting, to prepare for the meeting"
      },
      {
        id: 7,
        title: "Lunch",
        start: new Date(2019, 3, 12, 12, 0, 0, 0),
        end: new Date(2019, 3, 12, 13, 0, 0, 0),
        desc: "Power lunch"
      },
      {
        id: 8,
        title: "Meeting",
        start: new Date(2019, 3, 12, 14, 0, 0),
        end: new Date(2019, 3, 12, 15, 0, 0)
      },
      {
        id: 9,
        title: "Happy Hour",
        start: new Date(2019, 3, 12, 17, 0, 0),
        end: new Date(2019, 3, 12, 17, 30, 0),
        desc: "Most important meal of the day"
      },
      {
        id: 10,
        title: "Dinner",
        start: new Date(2019, 3, 12, 20, 0, 0, 0),
        end: new Date(2019, 3, 12, 21, 0, 0, 0)
      }
    ];
    let allViews = Object.keys(BigCalendar.Views).map(
      k => BigCalendar.Views[k]
    );
    return (
      <div className="find-us">
        <div className="find-us-container">
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
                    rel="noopener noreferrer"
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
                    rel="noopener noreferrer"
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
                    rel="noopener noreferrer"
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
                    rel="noopener noreferrer"
                    href="https://www.google.com/maps/place/Madonna+Inn/@35.2674132,-120.6746599,15z/data=!4m2!3m1!1s0x0:0x6f2837fd2edba5ec?ved=2ahUKEwj0oJyF3-HfAhXmHDQIHXEnAJ0Q_BIwGnoECAIQCA"
                  >
                    <p className="obispo new-label">
                      <span className="align">San Luis Obispo</span>
                    </p>
                  </a>
                </div>
              </div>
            </div>

            <p className="shows-text">
              We love traveling to art shows and festivals. Find out where we
              are going to be below.
            </p>
          </div>
          <div className="calendar">
            <BigCalendar
              localizer={localizer}
              events={dummyEvents}
              views={allViews}
              step={60}
              defaultView={BigCalendar.Views.AGENDA}
              showMultiDayTimes
              defaultDate={new Date(2015, 3, 1)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FindUs;
