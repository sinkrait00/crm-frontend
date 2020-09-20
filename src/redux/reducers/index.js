import {combineReducers} from "redux";
import {tableReducer} from './tableReducer'
import {mainReducer} from "./mainReducer";
import {usersReducer} from "./usersReducer";
import {providerReducer} from "./providerReducer";

export const rootReducer = combineReducers({
    main: mainReducer,
    table: tableReducer,
    users: usersReducer,
    providers: providerReducer
})