

import { APP_USERID, NAVIGATION ,GETPARENTS} from "../constants/action-types";





const initialState = {
  API_URL:"https://localhost:44307/",
  active_page: "NAV_FAMILY",
  parents:[],
  ifkuserId:6
};

function rootReducer(state = initialState, action) {  

  if (action.type === NAVIGATION) { 

    var object =Object.assign({},state, {active_page:action.payload});

        return object;
  }
  
  if (action.type === APP_USERID) { 

    var object =Object.assign({},state, {ifkuserId:action.payload});

        return object;
  }
  

  return state;
}


export default rootReducer;