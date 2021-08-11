import React from 'react';
import { CircularProgressbarWithChildren as Progressbar } from "react-circular-progressbar";

const Progress = (props) => {
    return (
        <Progressbar value={props.percentage}>
            <div className="progressContent" style={{ fontSize: 20 }}>
              <div className="purpleText">
                {" "}
                {props.quantity_sold}
              </div>
              <div className="darkGreyText">sold</div>
              <div className="lightGreyText">out of</div>
              <div className="lightGreyText">
                {props.product_quantity}
              </div>
            </div>
          </Progressbar>
    );
};

export default Progress;