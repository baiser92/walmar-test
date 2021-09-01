


import styled from "styled-components";

export const Card = styled.div`
 box-shadow: 0 0 12px 0 #e6e5e5;  
 border-radius: 16px;
 //height: 300px;
 height: 450px;
 margin-top: 180px;

 width: 300px;
 //width: 180px;
 float: left;
 background-color: white;
 margin-left: 32px;
 border-radius: 10px; 
 


 .card-body {
 margin-top: 16px;
 width: 100px;
 padding-right: 20px;
 margin-right: 20px;
 padding-left: 20px;
} 

.card-body > img 
 {
 position:relative;
 height: 80px;
 width: 150px;
 animation: rotation 2s infinite linear;
 } 

 .walmart-sales-price {
    display: flex; 
    align-items: center;
    font-size: 18px;
    color: #565656;
    font-weight: 700;
 }


.d-fle {
    display: flex!important;
}
 .walmart-discount-percentage-card{
    margin-top: 1px; 
    margin-left: 6px;
    width: 40px;
    border-radius: 16px;
    background-color: #de1c24;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    color: #fff;
 }


 .product-description{
    font-size: 16px;
    font-weight: 400;
    color: #6d6e71;
    line-height: 1.5rem;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 8px;
}
 
.product-info{
    padding: .5rem;
}

 .brand{
    font-weight: bold; 
    color: rgb(0, 0, 0)
 }


 .walmart-reference-price{
    font-size: 12px;
    text-decoration: line-through;
    color: #6d6e71;
 }

.walmart-add-cart-button-container{
    justify-content: center; width: 95%;
    text-align: center;
    margin-top: 20%;
}

.walmart-add-cart-button{ 
    justify-content: center;
    width: 95%;
    width: 145px;
    height: 32px;
    border-radius: 23px;
    box-shadow: 0 1px 5px 0 rgb(0 0 0 / 25%);
    background-color: #fff;
    cursor: pointer;
    font-size: 16px;
    line-height: 1.4;
    font-weight: 700;
    letter-spacing: .4px;
    color: #0071ce;
    padding: 6%;
    
}

.cp-no-select {
    cursor: pointer;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
} 

.text-center {
    text-align: center!important;
}

.pt-5, .py-5 {
    padding-top: .3125rem!important;
} 



.overlay-wrap{ 
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 220px;
    width: 100%;
    position: relative;

} 

.overflow-hidden{
    overflow: hidden;
}

.bg-white{
    background-color: #fff!important;
}

.product-image-shadow{
    z-index: 1;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 4px;
    position: absolute;
    background-blend-mode: multiply;
    background-image: linear-gradient(rgba(249,249,249,0),rgba(0,0,0,0.12));
}


.labels-container {
    position: absolute;
    bottom: 8px;
    width: 100%;
    padding-left: 5px;
    z-index: 2;
    left: 0;
}


.d-flex {
    display: flex!important;
}

.cyber-lider-cards-container {
    position: absolute;
    bottom: 8px;
    width: 100%;
    padding-left: 5px;
    left: 0;
    top: 0;
}


img{
    filter: unset;
    min-width: 50px;
    max-height: 220px;
    vertical-align: middle;
    border-style: none; 

    width: 100%;
}

.img-fluid {
    max-width: 100%;
    height: auto;
}


.m-auto {
    margin: auto!important;
}
@media (min-width: 768px){ 

.product-description {
      font-size: 14px;
      margin-bottom: 4px;
}

.walmart-reference-price{
      font-size: 10px;
} 

.walmart-sales-price {
  font-size: 20px;
} 

.walmart-add-cart-button {
  width: 130px;
}
}
 
`



