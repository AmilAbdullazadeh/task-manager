import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  userListReducer,
  userLoginReducer,
  userRegisterReducer,
} from "./reducers/userReducers";
import {
  taskCreateReducer,
  taskListReducer
} from "./reducers/taskReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userList: userListReducer,

  taskList: taskListReducer,
  taskCreate: taskCreateReducer
});

const userInfofromStorage =
  localStorage.getItem("userInfo") &&
  localStorage.getItem("userInfo") !== null &&
  JSON.parse(localStorage.getItem("userInfo"));

const initialState = {
  userLogin: {
    userInfo: userInfofromStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
