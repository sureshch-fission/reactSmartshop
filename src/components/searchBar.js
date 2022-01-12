import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import "../UI/products.css";
import { productActions } from "../store/productSlice";
import { Button, Form } from "react-bootstrap";


const SearchBar = () => {
  const searchInputref = useRef();
  const dispatch = useDispatch();

  const searchHandler = (e) => {
    e.preventDefault();

    const EnteredKey = searchInputref.current.value;
     

    dispatch(productActions.filter(EnteredKey));
    searchInputref.current.value = ""
  };
  return (
    
      <Form onSubmit={searchHandler} className=" ml-5 d-flex">
        <Form.Control
          type="text"
          placeholder="Search Products..."
          ref={searchInputref}
          className='me-4'
      
        ></Form.Control>
        <Button type="submit"  variant='outline-success' className="btn-light my-3 mx-1">
        Search
        </Button>


      </Form>


  );
};
export default SearchBar;
