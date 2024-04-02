import {  combineReducers } from "redux";
import  storage  from "redux-persist/lib/storage";
import appReducer from "./slices/app";
import authReducer from "./slices/auth";

const rootPeristConfig ={
    key:"root",
    storage,
    keyPrefix: "redux-",
};
const rootReduceer = combineReducers({
    app: appReducer,
    auth: authReducer,

})
export { rootPeristConfig, rootReduceer}