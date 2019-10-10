
import  {NAVIGATION} from '../constants/action-types'


export function switchPage(payload) {

    console.log({NAVIGATION,payload});
    return { type: NAVIGATION, payload }
  };


  