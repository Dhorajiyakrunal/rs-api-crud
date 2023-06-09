import { createStore } from "redux";
import rootreducer from "./redux/Reducer";

const store = createStore(rootreducer)

export default store