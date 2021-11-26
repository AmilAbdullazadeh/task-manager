import React, { useEffect } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import {
  createProduct,
  deleteProduct,
  listProducts,
} from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { PRODUCT_CREATE_RESET } from "../constants/productConstants";

function TaskListPage({ history }) {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.taskList);
  const { loading, error, tasks } = taskList;

  const taskCreate = useSelector((state) => state.taskCreate);
  const {
    error: errorCreate,
    loading: loadingCreate,
    success: successCreate,
    task: taskCreated,
  } = taskCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const {userInfo} = userLogin;

  useEffect(() => {
        
  }, [
      dispatch,
      history,
      userInfo,
      successCreate,
      taskCreated,
  ])
  return <div></div>;
}

export default TaskListPage;
