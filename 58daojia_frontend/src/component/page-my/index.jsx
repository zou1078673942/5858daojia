import React from 'react'
import {Route} from 'react-router'
import MyApp from './MyApp'
import MyOrder from './order/myOrder/MyOrder'

export default function My () {
    return (
        <>
            <Route exact path='/my' component={MyApp}/>
            <Route path='/my/order' component={MyOrder}/>
        </>
    )
}