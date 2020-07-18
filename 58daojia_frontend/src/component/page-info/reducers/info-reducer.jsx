import {
    IS_LOADING_INFO,
    SET_INFO_ITEM
}from '../actions/info-action'

export default {
    // 页面状态改变  对应数据上的改变
    isLoadingInfo(state=true,action){
        const { type, payload } = action
        switch (type) {
            case IS_LOADING_INFO:
                return payload
            default:
        }
        return state
    },
    infoData(state=null,action) {
        const { type, payload } = action
        switch (type) {
            case SET_INFO_ITEM:
                return payload
            default:
        }
        return state
    }
}