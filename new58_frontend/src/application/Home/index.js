import React from 'react'
import HomeHead from './HomeHead'
import HomeNav from './HomeNav'
import ToHome from './ToHome'
import UpDoor from './UpDoor'
import Need from './Need'
import More from './More'
import { renderRoutes } from 'react-router-config'

function Home (props) {
    const { route } = props
    return (
        <>
            <HomeHead/>
            <HomeNav />
            <ToHome />
            <UpDoor />
            <Need />
            <More />
            {renderRoutes(route.routes)}
        </>
    )
}

export default Home