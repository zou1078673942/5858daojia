import React, { useCallback } from 'react'
import styled from 'styled-components'
import style from '../../assets/global-style';
import PropTypes from "prop-types";

const HeaderWrap = styled.div`
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.2rem;
    width: 100%;
    background-color: ${style["back-ground-color"]};
    z-index: 99;
    border-bottom: ${style["border-bottom"]};
    span{
        min-width: 100px;
        font-size: 0.4rem;
        color: ${style["font-color-1"]};
        display: flex;
        align-items: center;
    }
    .left{
        justify-content:flex-start;
    }
    .right{
        justify-content:flex-end;
        padding-right:10px;
    }
    >h2{
        color: ${style["font-color-1"]};
        font-size: 0.5rem
    }
`

const Header = props => {
    const { title, text } = props
    const onBack = useCallback(() => {
        window.history.back()
    })
    return (
        <HeaderWrap>
            <span className="left">
                <svg
                    width="42"
                    height="42"
                    onClick={onBack}
                ><polyline
                        points="25,13 16,21 25,29"
                        stroke="#000"
                        strokeWidth="2"
                        fill="none" />
                </svg>
            </span>
            <h2>{title}</h2>
            <span className="right">{text}</span>
        </HeaderWrap>
    )
}

Header.defaultProps = {
    title: '标题',
    text: ''
}

Header.porpTypes = {
    title: PropTypes.string,
    text: PropTypes.string
}

export default React.memo(Header);