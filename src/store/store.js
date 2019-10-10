
import { createStore, applyMiddleware } from "redux";

import rootReducer from "../reducers/rootReducer";

import { forbiddenWordsMiddleware } from "../middleware/middleware";

const store = createStore(
  rootReducer,
  applyMiddleware(forbiddenWordsMiddleware)
);

export default store;