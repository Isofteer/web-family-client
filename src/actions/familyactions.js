
import  {SETPARENT, GETPARENT,GETPARENTS} from '../constants/action-types';



export function SetParent (payload) {    
    return { type: SETPARENT, payload }
  };

export function GetParent (payload) {    
    return { type: GETPARENT, payload }
  };
  
export function GetParents (payload) {
  
  console.log({payload})
  
    return { type: GETPARENTS, payload }
  };

