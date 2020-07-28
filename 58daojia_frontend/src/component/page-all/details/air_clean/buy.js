import styled from 'styled-components';

export const Buy = styled.div`
    position: fixed;
    bottom: 0;
  height: 2rem;
  width:10rem;
  background-color: #fff;
  display:flex;
  align-items:center;
  justify-content:space-around;

    .kefu_icon{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        width: 1rem;
        height: 2rem;
        }
    .kefu_word{
        width: 2rem;
        height: 1rem;
        font-size:.4rem;
    }
    .buy_now{
  justify-content:center;
  align-items:center;
        display:flex;
        width: 7rem;
        height: 1.5rem;
        background-color: rgb(255,89,80);
        color:white;
        font-size:.45rem;
        }
      
`;
