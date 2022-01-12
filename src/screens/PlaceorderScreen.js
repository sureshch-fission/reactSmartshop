import React, { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import { Col, Row } from "react-bootstrap";

const PlaceOrder = () => {
  const [isLoading, setLoading] = useState(true);

  setInterval(() => {
    setLoading(false);
  }, 2000);


  return (
    <Row>
      <Col md={3}></Col>
      <Col md={4} xs={6}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (

          <h1 className="text-primary m-5 ">Order Placed 😃</h1>



        )}

      </Col>
    </Row>

  );
};
export default PlaceOrder;
