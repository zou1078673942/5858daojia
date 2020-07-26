import styled from 'styled-components';

export const Youhui = styled.div`
  position: relative;
  margin-top:.25rem;
    width:10rem;
    display:flex;
    height:1.6rem ;
    align-items:center;
  background-color: #fff;
    ul{
        
        position:relative;
        width:10rem;
        /* height: 1rem; */
        justify-content:space-around;
        display: flex;
        /* justify-content:space-around; */
        /* padding-right:1rem; */
        /* left:.5rem; */
        color:#808080;
        }
        li:first-child{
          position:relative;
          font-size:.37rem;
          color:red;
          background-color:#f1f0f0;
          border:#000  .01rem;
          border-radius:.1rem;
        }
        li:nth-child(2){
          position:relative;
          font-size:.41rem;
          color:black;
          left:-1rem;
        
        }
        li:nth-child(3){
          position:relative;
          font-size:.41rem;
          color:black;
          border:#999999 solid .002rem;
          border-radius:.1rem;

        }


      
`;
