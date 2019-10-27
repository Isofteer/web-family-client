

import { APP_USERID} from "../constants/action-types";

export function AssignUserId (payload) {

  console.log({payload})
    return { type: APP_USERID, payload }
  };


  