import React from "react";
import {Row, Col } from "react-bootstrap";
const Product = (props) => {
  return (
    <div className="itemCon">
      <Row>
        <Col xs={12} md={6}>
          <div className="itemCard">
            <img src={props.product.product_id.image} className="itemsImg" />
            <h5 className="title">Buy a</h5>
            <div className="subTitle">{props.product.title}</div>
            <h3 className="des">{props.product.description}</h3>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="itemCard">
            <div className="archShape"></div>
            <img src={props.product.prize_id.image} className="itemsImg" />
            <h5 className="title light">Get a chance to win </h5>
            <div className="subTitle">{props.product.prize_id.name}</div>
            <h3 className="des">{props.product.prize_id.description}</h3>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Product;
