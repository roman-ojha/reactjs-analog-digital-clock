import React from "react";
import AnalogClockNumber from "./AnalogClockNumber";
import AnalogClockDotPointCircle from "./AnalogClockDotPointCircle";
import AnalogClockSound from "../Audio/Analog_Clock_Sound.mp3";

const AnalogClock = () => {
  let setFristSecond = new Date().getSeconds() * 6;
  let setFirstMinute =
    new Date().getSeconds() / 10 + new Date().getMinutes() * 6;
  let setFirstHours = setFirstMinute / 12 + new Date().getHours() * 30;
  let audio = new Audio(AnalogClockSound);
  setInterval(() => {
    let setSecond = new Date().getSeconds() * 6;
    let setMinute = new Date().getSeconds() / 10 + new Date().getMinutes() * 6;
    let setHour = setMinute / 12 + new Date().getHours() * 30;
    let displaySecond = document.getElementById(
      "analog_clock_second_pointer_container"
    );
    audio.play();
    displaySecond.style.transform = `rotate(${setSecond - 90}deg)`;
    let displayMinute = document.getElementById(
      "analog_clock_minute_pointer_container"
    );
    displayMinute.style.transform = `rotate(${setMinute - 90}deg)`;
    let displayHour = document.getElementById(
      "analog_clock_hour_pointer_container"
    );
    displayHour.style.transform = `rotate(${setHour - 90}deg)`;
  }, 1000);

  return (
    <>
      <div id="analog_clock_container">
        <div id="analog_clock_outer_frame">
          <div id="analog_clock_inner_frame">
            <div id="analog_clock_number_container">
              <AnalogClockNumber number="1" id="one" />
              <AnalogClockNumber number="2" id="two" />
              <AnalogClockNumber number="3" id="three" />
              <AnalogClockNumber number="4" id="four" />
              <AnalogClockNumber number="5" id="five" />
              <AnalogClockNumber number="6" id="six" />
              <AnalogClockNumber number="7" id="seven" />
              <AnalogClockNumber number="8" id="eight" />
              <AnalogClockNumber number="9" id="nine" />
              <AnalogClockNumber number="10" id="ten" />
              <AnalogClockNumber number="11" id="eleven" />
              <AnalogClockNumber number="12" id="twelve" />
              <div id="analog_clock_dot_point_container">
                <AnalogClockDotPointCircle id="one_circle" />
                <AnalogClockDotPointCircle id="two_circle" />
                <AnalogClockDotPointCircle id="three_circle" />
                <AnalogClockDotPointCircle id="four_circle" />
                <AnalogClockDotPointCircle id="five_circle" />
                <AnalogClockDotPointCircle id="six_circle" />
                <AnalogClockDotPointCircle id="seven_circle" />
                <AnalogClockDotPointCircle id="eight_circle" />
                <AnalogClockDotPointCircle id="nine_circle" />
                <AnalogClockDotPointCircle id="ten_circle" />
                <AnalogClockDotPointCircle id="eleven_circle" />
                <AnalogClockDotPointCircle id="twelve_circle" />
                <div id="analog_clock_time_pointer_container">
                  <div
                    id="analog_clock_hour_pointer_container"
                    style={{ transform: `rotate(${setFirstHours - 90}deg)` }}
                  >
                    <div id="analog_clock_hour_pointer_transparent"></div>
                    <div id="analog_clock_hour_pointer_flat"></div>
                    <div id="analog_clock_hour_pointer_sharp"></div>
                  </div>
                  <div
                    id="analog_clock_minute_pointer_container"
                    style={{ transform: `rotate(${setFirstMinute - 90}deg)` }}
                  >
                    <div id="analog_clock_minute_pointer_transparent"></div>
                    <div id="analog_clock_minute_pointer_flat"></div>
                    <div id="analog_clock_minute_pointer_sharp"></div>
                  </div>
                  <div id="analog_clock_middle_pointer_circle">
                    <div id="analog_clock_middle_pointer_inner_circle"></div>
                  </div>
                  <div
                    id="analog_clock_second_pointer_container"
                    style={{ transform: `rotate(${setFristSecond - 90}deg)` }}
                  >
                    <div id="analog_clock_second_pointer_transparent"></div>
                    <div id="analog_clock_second_pointer_thick"></div>
                    <div id="analog_clock_second_pointer"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalogClock;
