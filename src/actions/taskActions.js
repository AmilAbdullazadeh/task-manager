import axios from "axios";
import {
  TASK_CREATE_FAIL,
  TASK_CREATE_REQUEST,
  TASK_CREATE_RESET,
  TASK_CREATE_SUCCESS,
  TASK_LIST_FAIL,
  TASK_LIST_REQUEST,
  TASK_LIST_SUCCESS,
} from "../constants/taskConstants";

export const createTask = () => async (dispatch, getState) => {
  try {
    dispatch({ type: TASK_CREATE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post("", {}, config);
    dispatch({
      type: TASK_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TASK_CREATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listTasks = () => async (dispatch) => {
  try {
    dispatch({ type: TASK_LIST_REQUEST });
    const { data } = await axios.get("");
    dispatch({
      type: TASK_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TASK_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
