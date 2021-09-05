import { combineReducers } from "redux";
import tasks from './tasks';
import detailtask from './detailtask';
const myReducer = combineReducers ({
    tasks:tasks,
    detailtask:detailtask
})

export default myReducer;