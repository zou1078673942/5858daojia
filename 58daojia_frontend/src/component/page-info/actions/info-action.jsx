export const ACTION_GET_INFO = 'ACTION_GET_INFO'
export const IS_LOADING_INFO = 'IS_LOADING_INFO'
export const SET_INFO_ITEM = 'SET_INFO_ITEM'

export function isLoadingInfo (bol) {
    return {
        type: IS_LOADING_INFO,
        payload: bol
    }
}
export function fetchInfo () {
    return (dispatch) => {
        dispatch(isLoadingInfo(true))
        fetch('/info/info')
            .then(res => {
                res.json()
            })
            .then(info => {
                dispatch(isLoadingInfo(false))
                dispatch(setInfoItem(info))
            })
    }
}
export function setInfoItem (info) {
    return {
        type: SET_INFO_ITEM,
        payload: info
    }
}