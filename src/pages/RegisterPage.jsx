import React, { useEffect, useState } from "react";
import { Container, Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { register } from "../actions/userActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

function RegisterPage({ location, history }) {
  const [userName, setUserName] = "";
  const [email, setEmail] = "amil@admin.com";
  const [password, setPassword] = "qwqerty123@";
  const [confirmPassword, setConfirmPassword] = "qwqerty123@";

  const [organizationName, setOrganizationName] = "Golden Pay";
  const [phoneNumber, setPhoneNumber] = "0704400500";
  const [address, setAddress] = "A.Abbazsade 110";

  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords dont match");
    } else {
      dispatch(
        register(
          userName,
          email,
          password,
          address,
          phoneNumber,
          organizationName
        )
      );
    }
  };

  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <h5>Sign up</h5>
        {message && <Message variant="warning">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}

        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            type="username"
            placeholder="Enter username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Enter confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="organizationName">
          <Form.Label>Organization Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your organization name"
            value={organizationName}
            onChange={(e) => setOrganizationName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="phoneNumber">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Register
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          Have an Account?
          <Link to="/login">
            Sign In
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterPage;
