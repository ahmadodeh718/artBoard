import React from "react";
import {PlusLg, DashLg } from "react-bootstrap-icons";

const ControlBtns = (props) => {
  return (
    <div className="itemControl">
      <div className="itemWrap">
        <button
          onClick={() => props.next()}
          className="plusBtn"
        >
          <PlusLg />
        </button>
        <div className="number">{props.current + 1}</div>
        <button
          onClick={() => props.prev()}
          className="dashBtn"
        >
          <DashLg />
        </button>
      </div>
    </div>
  );
};

export default ControlBtns;
