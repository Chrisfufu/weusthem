import { combineReducers } from "redux"

import contact from "./contactReducer"
import user from "./userReducer"

export default combineReducers({
  contact,
  user,
})
