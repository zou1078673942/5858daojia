import { CHANGE_CITY } from "./actionCreator";

let state = JSON.parse(localStorage.getItem('city'))[0].city
console.log(state)
const defaultState = {
    city: state
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_CITY:
            return {...state, city: action.city}
        default:
            return state
    }
}