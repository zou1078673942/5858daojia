import React, { lazy, Suspense } from 'react'
import { Redirect } from 'react-router-dom'
import BlankLayout from '../layouts/BlankLayout'
import HomeLayout from '../layouts/HomeLayout'

const HomeComponent = lazy(() => import("../application/Home/"))

const SuspenseComponent = Component => props => {
    return (
        <Suspense fallback={null}>
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
        }]
    }]
}]