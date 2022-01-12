import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { loginActions } from "../store/loginSlice";
import "../UI/login.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar, Nav, Container } from "react-bootstrap";

const Login = () => {
  const dispatch = useDispatch();

  const [Error, setError] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const history = useHistory();

  const emialHandler = (e) => {
    setemail(e.target.value);
  };

  const passwordHandler = (e) => {
    setpassword(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const userDetails = {
      email,
      password,
    };
    if (email === "" || password === "") {
      setError(true);
      toast('Please Fill in All fields')
    } else if(email === email && password === password){
      history.push("/products");
      dispatch(loginActions.login(userDetails));
    }
    
  };


  return (
    <>
     
      <div>
        
        <form onSubmit={formSubmitHandler} className="form-container">
          <h1>Login Page</h1>
          <div>
            <input
              type="email"
              placeholder="Email-id..."
              onChange={emialHandler}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              onChange={passwordHandler}
              minLength={8}
            />
          </div>

          <button type="submit" className="btn btn-2 button">
            Login
          </button><ToastContainer />
        </form>
      </div>

    </>

  );
};
export default Login;
