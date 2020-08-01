import React, { lazy, Suspense } from 'react'
import { Redirect } from 'react-router-dom'
import BlankLayout from '../layouts/BlankLayout'
import HomeLayout from '../layouts/HomeLayout'

const HomeComponent = lazy(() => import("../application/Home/"))
const AllComponent = lazy(() => import("../application/All/"))
const InfoComponent = lazy(() => import("../application/Info/"))
const MyComponent = lazy(() => import("../application/My/"))
const AddressComponent = lazy(() => import("../application/Address/"))


const SuspenseComponent = Component => props => {
    return (
        <Suspense fallback="加载中">
            <Component {...props}>
            </Component>
        </Suspense>
    )
}

export default [{
    component: BlankLayout,
    routes: [{
        path: '/',
        component: HomeLayout,
        routes: [{
            path: '/',
            exact: true,
            render: () => <Redirect to={"/home"} />
        }, {
            path: '/home',
            component: SuspenseComponent(HomeComponent),
            routes:[{
                path: "/home/address",
                component: SuspenseComponent(AddressComponent),
            }]
        },{
            path: '/all',
            component: SuspenseComponent(AllComponent),
        },{
            path: '/info',
            component: SuspenseComponent(InfoComponent),
        },{
            path: '/My',
            component: SuspenseComponent(MyComponent),
        }]
    }]
}]