

import { GETPARENTS } from "../constants/action-types";

const initialState = { 
    parents:[]
  };

function familyReducer(state = initialState, action) {  

    console.log({action})

  if (action.type === GETPARENTS) { 

    var object =Object.assign({},state, {parents:action.payload});

        return object;
  }

  return state;
}

export default familyReducer;