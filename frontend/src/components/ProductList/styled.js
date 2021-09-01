


import styled from "styled-components";



export const DivContainer = styled.div` 
margin-left: 0%;
 padding-left: 0%;
 display: flex; //the flex stylings here
 flex-wrap: wrap;
 align-items: center;

`


export const Container = styled.div`
 background-color: #f5f5f5;  

.header{
    width: 100%;
    height: 74px;
    background-color: #0071ce;
    display: flex;
    z-index: 5;
    position: fixed;
    padding-bottom: 40px;
    margin-top: 0px;
    //margin-top: 30px;
}

 .header .compact {
    height: 58px;
    background-color: rgb(0, 113, 206);
} 

.header-w{
    max-width: 1440px;
    margin: auto;
    display: flex;
    width: 100%;
}

img{
    width: 152px; 
    height: 35px; 
    margin-top: 12px; 
    margin-bottom: 6px;
    background: white;
}

section{
    width: 100%;
    position: absolute;
}
@media (max-width: 910px){
    .header {
    margin-top: 0;
}
}


`
