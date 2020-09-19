import {combineReducers} from "redux";
import {tableReducer} from './tableReducer'
import {mainReducer} from "./mainReducer";
import {employeeReducer} from "./employeeReducer";

export const rootReducer = combineReducers({
    main: mainReducer,
    table: tableReducer,
    employee: employeeReducer
})