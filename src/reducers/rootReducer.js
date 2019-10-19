

import { ADD_ARTICLE, NAVIGATION ,GETPARENTS} from "../constants/action-types";





const initialState = {
  active_page: "NAV_FAMILY",
  parents:[]
};

function rootReducer(state = initialState, action) {  


  if (action.type === NAVIGATION) { 

    var object =Object.assign({},state, {active_page:action.payload});

        return object;
  }
  

  return state;
}


export default rootReducer;