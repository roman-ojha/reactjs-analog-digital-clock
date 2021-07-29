import React from "react";

const AnalogClockNumber = (props) => {
  return (
    <>
      <div className="analog_clock_number_container">
        <h1 className="analog_clock_number" id={props.id}>
          {props.number}
        </h1>
      </div>
    </>
  );
};

export default AnalogClockNumber;
