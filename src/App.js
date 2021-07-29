import React from "react";
import AnalogClock from "./React-components/AnalogClock";

const App = () => {
  const tabSwitch = (event) => {
    if (event.target.id === "analog_clock_tab") {
      document.getElementById("digital_clock_tab").style.width = "280px";
      document.getElementById("digital_clock_tab").style.borderRadius = "0px";
      document.getElementById("digital_clock_tab").style.zIndex = "1";
      document.getElementById("digital_clock_tab").style.borderRadius =
        "0px 15px 0px 0px";
      document.getElementById("analog_clock_tab").style.width = "250px";
      document.getElementById("analog_clock_tab").style.zIndex = "2";
      document.getElementById("analog_clock_tab").style.borderRadius =
        "15px 30px 0px 0px";
      document.getElementById("analog_clock_tab").style.boxShadow =
        " 5px 5px 5px #49365c42";
    } else if (event.target.id === "digital_clock_tab") {
      document.getElementById("analog_clock_tab").style.width = "280px";
      document.getElementById("analog_clock_tab").style.borderRadius = "0px";
      document.getElementById("analog_clock_tab").style.zIndex = "1";
      document.getElementById("analog_clock_tab").style.borderRadius =
        "15px 0px 0px 0px";
      document.getElementById("digital_clock_tab").style.width = "250px";
      document.getElementById("digital_clock_tab").style.zIndex = "2";
      document.getElementById("digital_clock_tab").style.borderRadius =
        "30px 15px 0px 0px";
    }
  };
  return (
    <>
      <div id="body_container">
        <div id="analog_digital_container">
          <div id="anala_digital_tab">
            <button id="analog_clock_tab" onClick={tabSwitch}>
              Analog
            </button>
            <button id="digital_clock_tab" onClick={tabSwitch}>
              Digital
            </button>
          </div>
          <AnalogClock />
        </div>
      </div>
    </>
  );
};

export default App;
