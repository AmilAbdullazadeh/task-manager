import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import {
  createProductReview,
  listProductDetails,
} from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

function TaskPage({history}) {
 const dispatch = useDispatch();
 const userLogin = useSelector((state) => state.userLogin);
 const {userInfo} = userLogin;


  return <div></div>;
}

export default TaskPage;
