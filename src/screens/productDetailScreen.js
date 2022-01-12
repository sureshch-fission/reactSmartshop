import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link, Redirect } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { cartActions } from "../store/cartSlice";
import "../UI/products.css";
import { Col, ListGroup,  Row, Image } from "react-bootstrap";


const ProductDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();


  const products = useSelector((state) => state.Products.products);
  const productQuantity = useSelector(
    (state) => state.cart.productQuantity
  );

  const LoadedProducts = products.find((item) => item.id == params.productId);
  const cartData = useSelector((state) => state.cart);
  const { items } = cartData;


  const image_link = LoadedProducts.image_link;
  const id = LoadedProducts.id;
  const price = LoadedProducts.price;
  const name = LoadedProducts.name;
  const rating = LoadedProducts.rating;

  const addTocartHandler = () => {
    toast("Product Added to cart");
    dispatch(
      cartActions.addTocart({
        image_link,
        price,
        id,
        name,
        rating,
        productQuantity,
      })
    );

  };

  const incerementHandler = () => {


    dispatch(cartActions.Productincrement());
  };

  const decerementHandler = () => {
    dispatch(cartActions.Productdecrement());
  };

  return (
    <>


      {!LoadedProducts ? <Redirect to={"/products"} /> : (

        <Row className="mainproducts py-4">

          <Col xs={6}>

            <Link to="/products">

              <Image src={LoadedProducts.image_link} alt={'productImage'} style={{ height: '400px', width: "auto" }} />

            </Link>
          </Col>

          <Col md={6} className="my-3">
            <ListGroup>

              <ListGroup.Item> <h5 className="card-title">{LoadedProducts.name}</h5></ListGroup.Item>





              {LoadedProducts.rating === null ? " " : (<ListGroup.Item><h5 className="card-title">{LoadedProducts.rating} <i className="fas fa-star"></i></h5></ListGroup.Item>)}




              <ListGroup.Item> <p className="card-title">{LoadedProducts.description}</p></ListGroup.Item>


              <ListGroup.Item> <h5 className="card-title">${LoadedProducts.price}</h5></ListGroup.Item>



              <ListGroup.Item>
                <button className="btn" onClick={(e) => incerementHandler(e)}>
                  +
                </button>

                <strong> {productQuantity}</strong>
                <button className="btn" onClick={(e) => decerementHandler(e)}>
                  -
                </button>
              </ListGroup.Item>


              <button
                variant="primary"
                className="button"
                onClick={addTocartHandler}

              >
                Add to Cart
              </button><ToastContainer />

            </ListGroup>
          </Col>





        </Row>
      )}

    </>


  );

};
export default ProductDetail;
