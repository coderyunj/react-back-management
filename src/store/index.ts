import { combineReducers, legacy_createStore } from "redux"

import handleNum from "./NumStatus/reducer"
import handleArr from "./ArrStatus/reducer"

const reducers = combineReducers({
  handleNum,
  handleArr
})
const store = legacy_createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store