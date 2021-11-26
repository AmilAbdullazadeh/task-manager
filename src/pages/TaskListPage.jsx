import React, { useEffect } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { createTask, listTasks } from "../actions/taskActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

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
  const { userInfo } = userLogin;

  useEffect(() => {
    // if (!userInfo.isAdmin) {
    //   history.push("/login");
    // }
    if (successCreate) {
      dispatch(listTasks);
    }
  }, [dispatch, history, userInfo, successCreate, taskCreated]);

  const createTaskHandler = () => {
    dispatch(createTask());
  };

  return (
    <div>
      <Row className="align-items-center">
        <Col>
          <h1>Tasks</h1>
        </Col>

        <Col className="text-right">
          <Button className="my-3" onClick={createTaskHandler}>
            <i className="fas fa-plus"></i> Create Task
          </Button>
        </Col>
      </Row>

      {loadingCreate && <Loader />}
      {errorCreate && <Message variant="danger">{errorCreate}</Message>}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>Title</th>
                <th>Status</th>
                <th>Description</th>
                <th>Deadline</th>
              </tr>
            </thead>

            <tbody>
              {tasks.map((task, idx) => (
                <tr key={idx}>
                  <td>{task.title}</td>
                  <td>{task.status}</td>
                  <td>${task.description}</td>
                  <td>{task.deadline}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
}

export default TaskListPage;
