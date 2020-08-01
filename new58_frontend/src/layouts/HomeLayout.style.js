import styled from 'styled-components'
import style from '../assets/global-style'

export const Tab = styled.div`
    position: fixed;
    display:flex;
    justify-content:space-around;
    align-items:center;
    bottom: 0;
    width: 100%;
    background-color:${style["back-ground-color"]};
    a{
        font-size: 14px;
        display: inline-block;
    }
`
export const TabItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 1.4rem;
    span{
        width:1.2rem;
        height:1.2rem;
        display:flex;
        justify-content:center;
        align-items:center;
    }
`