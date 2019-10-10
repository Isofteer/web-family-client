

import { ADD_ARTICLE, NAVIGATION } from "../constants/action-types";





const initialState = {
   active_page: "NAV_FAMILY",
  articles: [
    { id:10,title:"tonnie"}
  ]
};


function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  if (action.type === NAVIGATION) { 

    var object =Object.assign({},state, {active_page:action.payload});

    console.log({action});

        return object;
  }


  return state;
}


export default rootReducer;