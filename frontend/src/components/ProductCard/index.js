import React, { Component } from 'react'

import { Card } from './styled';

class ProductCard extends Component {
   
    render() {
      const {product} = this.props
      return ( 
        <Card>
            <div className="card-body"></div>
            <div  className="overlay-wrap overflow-hidden bg-white" >
              <div className="text-center">
                <div className="product-image-shadow"></div>
                <div className="d-flex labels-container"></div>
                <div className="d-flex cyber-lider-cards-container"></div>
                <div id="image" className="bg-white">
                    <img id="lazy-img" alt="product" className="img-hover-zoom img-fluid m-auto" src={"https://"+product.image} ></img>
                </div>
              </div>
            </div>
            <div className="product-info">
                <div className="d-flex text-left product-description">
                  <div>
                    <span className="brand">{product.brand}</span>
                    <span> {product.description}</span>
                  </div>
                </div>
                <div className="walmart-sales-price d-flex" >
                    ${product.price}  
                    {product.IsDiscount ? <div  id="discount-porcentaje" className="walmart-discount-percentage-card">50%</div>  : null}
                </div>

                {product.IsDiscount ?  <div  className="d-flex">
                    <span id="discount-price" className="walmart-reference-price">{product.discountPrice}
                    </span>
                </div>  : null}

                <div className="walmart-add-cart-button-container" >
                    <span  className="walmart-add-cart-button pt-5 text-center cp-no-select">Agregar</span>
                </div>
            </div>
        </Card> 
            
      )
    }
}

export default ProductCard