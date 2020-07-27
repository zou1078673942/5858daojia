import { CHANGE_CITY } from "./actionCreator";
import { reducer } from "./actionCreator";

const defaultState = {
    city:'东华理工大学'
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_CITY:
            return {...state, city: action.city}
        default:
            return state
    }
}