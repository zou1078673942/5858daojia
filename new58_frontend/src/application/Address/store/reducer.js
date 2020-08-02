import {CHANGE_CITY} from './constants'

let state = JSON.parse(localStorage.getItem('city'))?.city
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