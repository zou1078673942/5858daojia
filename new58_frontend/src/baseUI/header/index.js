import React from 'react'
import styled from 'styled-components'
import style from '../../assets/global-style';
import PropTypes from "prop-types";

const HeaderWrap = styled.div`
    position: fixed;
    width: 100%100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.2rem;
    width: 100%;
    background-color: ${style["back-ground-color"]};
    z-index: 99;
    >h2{
        color: ${style["font-color-1"]};
        border-bottom: ${style["border-bottom"]};
        font-size: 0.5rem
    }
`