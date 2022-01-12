import React from "react";
import { useHistory, Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import "../UI/products.css";
import { loginActions } from "../store/loginSlice";
import { Card, Row, Col} from "react-bootstrap";


const UserDetails = () => {
  const dispatch = useDispatch();
  const userData = JSON.parse(localStorage.getItem("userDetails"));
  const history = useHistory();



  const logoutHandler = () => {
    dispatch(loginActions.logout());
    history.push('/');

    localStorage.removeItem('userDetails');
  }

  return (

    <>


      <Row className=" m-5">
        <Col></Col>

        <Col md={4}>
          <Card className=" shadow   p-4 bg-light justify-content-center">
            <Card.Body>
              <Card.Text>
                Name : <strong>Suresh</strong>
              </Card.Text>
              <Card.Text>
                Username : <strong> {userData.email}</strong>
              </Card.Text>
              <Card.Text>
                password: <strong> {userData.password}</strong>
              </Card.Text>
              <Card.Text>
                Phone Number : <strong>+91-99776655</strong>
              </Card.Text>
              <button className="btn btn-danger logoutbtn ml-4" onClick={logoutHandler}>Logout</button>

            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>


    </>



  );
};
export default UserDetails;
