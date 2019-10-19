
import { createStore, applyMiddleware,combineReducers } from "redux";

import defaultReducer from "../reducers/rootReducer";
import familyReducer from "../reducers/familyReducer";

import { forbiddenWordsMiddleware } from "../middleware/middleware";


const rootReducer = combineReducers({
  appStore :defaultReducer,  
  familyStore: familyReducer
})

const store = createStore(
  rootReducer,
  applyMiddleware(forbiddenWordsMiddleware)
);

export default store;