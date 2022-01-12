import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
import { Card } from 'react-bootstrap'
import { useState } from "react";
import '../UI/products.css'


const ProductsItem = ({ product }) => {
  const dispatch = useDispatch();
  const [searchedProduct, setsearachedProduct] = useState("")

  let quantity = 1;

  const productHandler = () => {
    dispatch(cartActions.productData(quantity));
  };








  return (
    <>





      <Card className=' shadow  m-5  p-3 ' style={{ height: 'auto' }}>
        <Link to={`/product/${product.id}`}>
          <Card.Img src={product.image_link} variant='top' />
        </Link>

        <Card.Body style={{ height: '160px' }}>

          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>


          {product.rating === null ? "" : (
            <Card.Text as='div'>
              <strong>{product.rating}<svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-star-fill rating-star"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg></strong>
            </Card.Text>
          )}


          <Card.Text as='h3'>${product.price}</Card.Text>
        </Card.Body>
      </Card>




    </>

  );
};
export default ProductsItem;
