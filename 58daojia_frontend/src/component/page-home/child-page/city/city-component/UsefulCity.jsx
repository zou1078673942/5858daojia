import React, { useEffect, useState, memo } from 'react';
import storage from '../../../../../../node_modules/storage'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


function UsefulCity() {
    const [usefulCity, setUsefulCity] = useState([])
    return (
        <>
        </>
    )
}

const mapStateToProps = (state) => ({
    city: state.city.city
})

export default connect(mapStateToProps)(memo(UsefulCity))