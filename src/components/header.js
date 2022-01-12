import React from 'react'
import { Route } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container, NavDropdown, NavLink, Form, FormControl, Button } from 'react-bootstrap'
import SearchBar from "./searchBar";




const Header = () => {
    const dispatch = useDispatch()



    const quantity = useSelector(state => state.cart.totalQuantity);
    const isAuthenticated = JSON.parse(localStorage.getItem('userDetails'));



    return (

        <header>







            <Navbar collapseOnSelect expand="lg" className='navbar' variant="dark">
                <Container>

                    <Nav className='m-3'> <Link to='/products' className='logo-text'> <h3 className='m-4 navbrand logo-text'>SmartShop</h3></Link></Nav>









                    {!isAuthenticated ? null : (

                        <>

                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <SearchBar className='mx-3 p-3' />

                                </Nav>
                                <Nav className='m-4'>
                                    <Link to="/userDetails">

                                        <i className='fas fa-user fa-2x icons'></i>
                                    </Link>

                                </Nav>
                                <Nav className='m-4'>



                                    <Link to='/cart' className='logo-text'>
                                        <i className='fas fa-shopping-cart fa-2x icons'></i>  </Link>
                                    <strong> <p className='cartquantity'>{quantity === 0 ? "" : quantity}</p></strong>

                                </Nav>
                            </Navbar.Collapse>

                        </>


                    )}




                </Container>
            </Navbar>








        </header>


    )
}

export default Header