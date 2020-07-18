import {createStore, combineReducers , applyMiddleware } from 'redux'
import {infoReducer} from '../component/page-info/reducers/info-reducer'
import thunk from 'redux-thunk'

export default createStore(
    combineReducers(infoReducer),
    {
        isLoadingInfo,
        infoData
    },
    applyMiddleware(thunk)
)