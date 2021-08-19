import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import coffeeReducer from "./coffee/coffeeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    coffee: coffeeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
})

export default rootReducer