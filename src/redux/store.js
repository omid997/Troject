import { createStore } from "redux";
import reducers from "./reducers";

let initialState = {
  tasks: [],
  groups: []
};

export default createStore(reducers, initialState);
