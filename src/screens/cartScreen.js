import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory,  Link } from "react-router-dom";
import "../UI/products.css";
import { cartActions } from "../store/cartSlice";
import { Col, ListGroup, ListGroupItem, Card, Row } from 'react-bootstrap'



const Cart = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'));

  const cartData = useSelector((state) => state.cart);
  const { items } = cartData;

  useEffect(() => {
    dispatch(cartActions.getTotoalAmount());
  }, [cartData, dispatch]);

  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const message = useSelector((state) => state.cart.message);

  const incerementHandler = (item) => {
    dispatch(cartActions.increment(item));
  };

  const decerementHandler = (item) => {
    dispatch(cartActions.decrement(item));
  };

  const removeItemHandler = (item) => {
    dispatch(cartActions.removeFromcart(item));
  };

  const placeOrderHandler = () => {
    history.push("/placeorder");
    dispatch(cartActions.placeroder());
  };

  return (
    <>
     {items.length === 0 && <h1 className="btn m-5 bg-primary text-light">Your Cart is Empty 😒. Please Go and Shop</h1> }
      <Row>
        <Col md={9}>

         

            <ListGroup variant="flush">

              {items.map((item) => (


                <ListGroupItem>


                  <Row>
                    <Col md={2}>

                      <Link to="/products">
                        <Card.Img
                          alt='cartImage'
                          src={item.productImage}

                        />
                      </Link>

                    </Col>
                    <Col md={3}>
                      <h5 className="card-title">{item.productName}</h5>
                    </Col>

                    <Col md={2}>
                      <h5 className="card-title">${item.productPrice}</h5>
                      <p> Total Amount :<h6> {Number(item.totalPrice).toFixed(2)}</h6></p>
                    </Col>

                    <Col md={2}>


                      <button
                        className="btn"
                        onClick={() => incerementHandler(item)}
                      >
                        +
                      </button>

                      {item.quantity}
                      <button
                        className="btn"
                        onClick={() => decerementHandler(item)}
                      >
                        -
                      </button>

                    </Col>

                   
                    <Col md={3}>
                      <ListGroup>

                      {item.rating === null ? "" : (
                       <h5 className="card-title">{item.rating} <svg
                       xmlns="http://www.w3.org/2000/svg"
                       width="16"
                       height="16"
                       fill="currentColor"
                       className="bi bi-star-fill rating-star"
                       viewBox="0 0 16 16"
                     >
                       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                     </svg></h5>
                      )}
                        


                        <h6
                          onClick={() => removeItemHandler(item)}
                          className="text-dark removebtn"
                        >
                          REMOVE
                        </h6>





                      </ListGroup>
                    </Col>
                  </Row>
                </ListGroupItem>
              )

              )}

            </ListGroup>

          

        </Col>

        {items.length === 0 ? "" : (
          <Col md={2}>
            <Card>

              <ListGroup variant="flush">
                <h5 className="subtotal">
                  <strong> Sub Total </strong>:{" "}
                  $
                  {Number(totalAmount).toFixed(2)}
                </h5>

                <button
                  onClick={placeOrderHandler}
                  className="btn btn-primary button"
                >
                  Place Order
                </button>
              </ListGroup>
            </Card>

          </Col>
        )}

      </Row>



    </>
  );
};
export default Cart;
